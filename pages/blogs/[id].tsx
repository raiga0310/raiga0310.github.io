import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import path from 'path';
import fs from 'fs';
import MarkdownContent from '../../components/MarkdownContent';
import { Link } from '@chakra-ui/react';

export default function Blog({markdown}: {markdown: string}) {
    return (
      <>
          <Head>
              <title>My Profile</title>
          </Head>
          <NavBar />
          <MarkdownContent markdown={markdown}/>
          <Link href="/blogs" pos="fixed">Back to Blogs</Link>
          <Footer />
      </>
    );
  }

export const getStaticPaths: GetStaticPaths = async () => {
  const blogsDirectory = path.join(process.cwd(), 'markdown', 'blogs');
  const filenames = fs.readdirSync(blogsDirectory);
  const paths = filenames.map((filename) => ({
    params: { id: filename.replace(/\.md$/, '') },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogsDirectory = path.join(process.cwd(), 'markdown', 'blogs');
  const filePath = path.join(blogsDirectory, `${params?.id}.md`);
  const markdown = fs.readFileSync(filePath, 'utf8');

  return { props: { markdown } };
};
