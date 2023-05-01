import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { markdownToHtml } from '../lib/markdownToHtml';
import fs from 'fs';
import path from 'path';

interface ProfileProps {
  content: string;
}

const Profile: React.FC<ProfileProps> = ({ content }) => {
  return (
    <>
      <Head>
        <title>My Profile</title>
      </Head>
      <NavBar />
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const markdownPath = path.join(process.cwd(), 'markdown', 'profile.md');
  const markdown = fs.readFileSync(markdownPath, 'utf-8');
  const content = await markdownToHtml(markdown);

  return {
    props: {
      content,
    },
  };
};

export default Profile;
