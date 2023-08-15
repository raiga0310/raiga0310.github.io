import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import fs from 'fs';
import path from 'path';
import MarkdownContent from '../components/MarkdownContent';
import { Container } from '@chakra-ui/react';

interface ProfileProps {
  markdown: string;
}

export default function Profile({ markdown }: ProfileProps) {
  console.log("rendering components...");
  return (
    <>
      <Head>
        <title>My Profile</title>
      </Head>
      <NavBar />
      <Container>
          <MarkdownContent markdown={markdown}/>
      </Container>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const markdownPath = path.join(process.cwd(), "markdown", "profile.md");
  console.log(markdownPath);
  
  if (!fs.existsSync(markdownPath)) {
    console.log(`File does not exist: ${markdownPath}`);
    return {
      props: {
          markdown: ""
      }
    };
  } else {
    const markdown = fs.readFileSync(markdownPath, "utf-8");
    return {
      props: {
          markdown
      }
    };
  }
};
