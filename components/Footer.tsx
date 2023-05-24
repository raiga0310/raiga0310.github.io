import React from 'react';
import { Link, Icon, Center, VStack, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <Center as="footer" bg="gray.500" color="white" h="8vh" w="100%" bottom="0">
      <Text fontSize="md">© 2023 raiga0310 portfolio. All rights reserved.</Text>
      <Link href="https://github.com/raiga0310/portfolio" isExternal color="teal.400">
        GitHub Repository <Icon as={FaGithub} ml={2} />
      </Link>
    </Center>
  );
};

export default Footer;
