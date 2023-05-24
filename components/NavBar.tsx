// components/NavBar.tsx
import { Box, Flex, Link, Heading, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} position="relative" display="inline-flex" alignItems="center" justifyContent="center" borderRadius="full">
      <Box
        padding="1"
        borderRadius="full"
        backgroundColor={isActive ? useColorModeValue('gray.200', 'gray.700') : 'transparent'}
        transition="all 0.3s"
      >
        <Heading size="md">{children}</Heading>
      </Box>
    </Link>
  );
};

const NavBar = () => {
  return (
    <Box borderBottom="1px" borderColor="gray.200" py="2">
      <Flex justifyContent="center">
        <NavLink href="/raiga0310.github.io">Profile</NavLink>
        <NavLink href="/raiga0310.github.io/history">History</NavLink>
        <NavLink href="/raiga0310.github.io/skills">Skills</NavLink>
        <NavLink href="/raiga0310.github.io/hobby">Hobby</NavLink>
        <NavLink href="/raiga0310.github.io/contact">Contact</NavLink>
      </Flex>
    </Box>
  );
};

export default NavBar;
