import React from 'react';
import Head from 'next/head';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const Profile: React.FC = () => {
  return (
    <>
      <Head>
        <title>My Profile</title>
      </Head>
      <NavBar />
      <h1>My Profile</h1>
      <p>Welcome to my profile page!</p>
      <Footer />
    </>
  );
};

export default Profile;
