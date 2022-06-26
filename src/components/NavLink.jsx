import { Link, useColorModeValue } from '@chakra-ui/react';

const NavLink = ({ children }) => {
  return (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      color="white"
      fontSize="xl"
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('green.300', 'green.300'),
      }}
      href={'#'}
    >
      {children}
    </Link>
  );
};

export default NavLink;
