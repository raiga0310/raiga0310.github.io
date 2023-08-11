# Lifecycle of Reactive Effects to Japanese(lazy)

 Effectsはそれぞれコンポーネントからの異なるライフサイクルを持つ｡コンポーネントがマウント､更新､アンマウントされるなど｡Effectは単に同期の開始と停止の2つしか行えない｡このサイクルはEffectsが依存するpropsやstateが変更されたときに再実行される｡ReactはこのEffectsの依存に対する正確なリンタールールを提供する｡

## The lifecycle of an Effect

 すべてのReactコンポーネントはマウント､更新､アンマウントの3つのライフサイクルを持つ｡
 **これはEffectについてではなく､コンポーネントに対しての考慮に有効な手段である｡** かわりに､コンポーネントから独立したそれぞれのライフサイクルについて考える｡
 Effectsは現在のpropsとstateに対しての外部との同期の方法を説明している｡コードの変更に応じて､多かれ少なかれ頻繁に同期が求められる｡

 これに関する可視化に､チャットサーバーとコンポーネントの接続を考える｡

```js
const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId]);
  // ...
}
```

 `const connection = createConnection(serverUrl, roomId);` はコンポーネントがマウントされたときに呼び出される｡

 クリーンアップ関数Effectsの示した同期の停止によって返される｡

`connection.disconnect();`

 直感的にはReactはコンポーネントのマウントと同時に同期を開始し､コンポーネントのマウントの解除に対して同期を停止するように考えられる｡もっともそれだけではない｡時々､コンポーネントがマウントされ続けている状態で､**同期の開始と停止が複数回呼び出される状況** は起こりうる｡

## Why synchronization may need to happen more than once

 `ChatRoom` コンポーネントがユーザーによって選択された`roomId` プロパティを受け取った状況を考える｡初期状態は`general`が与えられ､アプリケーションは`general`チャットルームを表示する｡
    
```js
 const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId /* "general" */ }) {
  // ...
  return <h1>Welcome to the {roomId} room!</h1>;
}
```

 UIが表示された後､Reactは同期を開始するEffectsを実行する｡これにより､`general`チャットルームに接続する｡

```js
function ChatRoom({ roomId /* general */} {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        };
    }, [roomId]);
})
//...
```

 その後､ユーザーが別のチャットルームを選択する｡ここでは`travel`を選択したとすると､ReactはUIの更新を行う｡

```js
function ChatRoom({ roomId /* "travel" */ }) {
  // ...
  return <h1>Welcome to the {roomId} room!</h1>;
}
```

 ここで行われる次の動作を考える｡ユーザーは､`travel` チャットルームが選択され､UIに表示されたのを確認する｡しかし､Effectsはまだ最後に行われた`general` チャットルームへの接続を維持している｡ **``roomId` プロパティは変更されたが､EfeectsはUIと異なる状態を返すことになっている｡**

 この点に関して､Reactは2つの動作を期待されている｡
  - Effectsは`general`チャットルームへの接続を切断すること(古い状態の破棄)
  - Effectsは`travel`チャットルームへの接続を開始すること(新しい状態の同期)
 **幸い､Reactにおけるこれらの方法はすでに教えられている｡** Effectsの本体は､同期の開始を示し､そしてクリーンアップ関数は同期の停止を示す｡Reactは現在のプロパティとステートに対して正しい順番で呼び出されることを必要とする｡

 ## How React re-synchronizes your Effect

 `roomId`の更新により`ChatRoom`コンポーネントは再レンダリングされる｡先程は`general`が与えられたが､今回は`travel`が与えられる｡ReactはEffectに対して異なるルームへの再接続を必要とする｡

  **同期の停止**をおこなうため､ `general`ルームへの接続後､ReactはEffectのクリーンアップ関数を呼び出す｡`roomId`が`general`である限り､クリーンアップ関数は`general`ルームへの接続を停止を行う｡

```js
function ChatRoom({ roomId /* "general" */ }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId); // Connects to the "general" room
    connection.connect();
    return () => {
      connection.disconnect(); // Disconnects from the "general" room
    };
    // ...
```

 レンダーを提供するたびにこのEffectをReactは実行する｡今回であれば､`roomId`は`travel`である｡`general`ルームへの接続は停止され､`travel`ルームへの接続が開始される｡
 この機能により､ユーザーがUIで選択したチャットルームと同じチャットルームへの接続が行われる｡
 異なる`roomId`の値に対する再レンダリングごとに､Effectは再同期する｡

