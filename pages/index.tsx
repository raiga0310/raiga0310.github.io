import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import fs from 'fs';
import path from 'path';
import MarkdownContent from '../components/MarkdownContent';

interface ProfileProps {
  markdown: string;
}

const Profile: React.FC<ProfileProps> = ({ markdown }: ProfileProps) => {
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
};

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

export default Profile;
