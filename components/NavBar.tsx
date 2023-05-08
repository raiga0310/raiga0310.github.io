import React from 'react';
import { Box, Flex, Link, Circle } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} position="relative" display="inline-block" py={3} px={5}>
      {children}
      {isActive && (
        <Circle
          position="absolute"
          bottom="-4px"
          left="50%"
          transform="translateX(-50%)"
          size="10px"
          bg="red.500"
        />
      )}
    </Link>
  );
};

const NavBar: React.FC = () => {
  return (
    <Box boxShadow="md" bg="gray.200">
      <Flex alignItems="center" justifyContent="space-around">
        <NavLink href="/">Profile</NavLink>
        <NavLink href="/history">History</NavLink>
        <NavLink href="/skills">Skills</NavLink>
        <NavLink href="/hobby">Hobby</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Flex>
    </Box>
  );
};

export default NavBar;
