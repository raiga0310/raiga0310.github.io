import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav>
      <Link href="/">Profile</Link>
      <Link href="/history">History</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/hobby">Hobby</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default NavBar;
