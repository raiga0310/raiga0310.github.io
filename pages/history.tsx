import Head from 'next/head';
import { GetStaticProps } from 'next';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import fs from 'fs';
import path from 'path';
import MarkdownContent from '../components/MarkdownContent';

export default function Hitstory({markdown}: {markdown: string}) {
  return (
        <>
    <Head>
      <title>My Profile</title>
    </Head>
    <NavBar />
    <MarkdownContent markdown={markdown}/>
    <Footer />
  </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const markdown = fs.readFileSync(path.join(process.cwd(), "markdown", "history.md"), "utf-8");
  return {
      props: {
          markdown
      }
  };
};
