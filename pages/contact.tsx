import Head from 'next/head';
import { GetStaticProps } from 'next';
import { markdownToHtml } from '../lib/markdownToHtml';
import fs from 'fs';
import path from 'path';

export default function Contacts({ html }: { html: string }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const markdownFilePath = path.join(process.cwd(), 'markdown', 'contacts.md');
  const markdown = fs.readFileSync(markdownFilePath, 'utf8');
  const html = await markdownToHtml(markdown);

  return {
    props: {
      html,
    },
  };
};