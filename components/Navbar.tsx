import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav>
      <Link href="/">Profile</Link>
      <Link href="/profile/history">History</Link>
      <Link href="/profile/skills">Skills</Link>
      <Link href="/profile/hobby">Hobby</Link>
      <Link href="/profile/contact">Contact</Link>
    </nav>
  );
};

export default NavBar;
