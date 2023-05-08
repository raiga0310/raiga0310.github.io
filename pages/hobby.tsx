import Head from 'next/head';
import { GetStaticProps } from 'next';
import { markdownToHtml } from '../lib/markdownToHtml';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import fs from 'fs';
import path from 'path';

export default function Skills({ html }: { html: string }) {
  return (
    <>
        <Head>
            <title>My Profile</title>
        </Head>
        <NavBar />
            <div dangerouslySetInnerHTML={{ __html: html }} />
        <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const markdownFilePath = path.join(process.cwd(), 'markdown', 'hobby.md');
  const markdown = fs.readFileSync(markdownFilePath, 'utf8');
  const html = await markdownToHtml(markdown);

  return {
    props: {
      html,
    },
  };
};