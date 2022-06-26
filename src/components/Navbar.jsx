import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Container,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { palettes } from '../helpers/theme';
import NavLink from './NavLink';

const Navbar = ({ links }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bgColor={palettes.green} position={'fixed'} w="100%">
      <Container
        as={Stack}
        maxW={'7xl'}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Flex
          h={16}
          alignContent="center"
          alignItems="center"
          justifyContent="space-between"
          px={10}
          w="100%"
        >
          <IconButton
            bgColor={palettes.green}
            size={'md'}
            icon={isOpen ? <AiOutlineCloseCircle /> : <GiHamburgerMenu />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack>
            <Image src="logo_white.png" alt="logo SBOG" width="92px" />
          </HStack>
          <HStack>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              gap={2}
            >
              {links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} bgColor={palettes.green}>
            <Stack as={'nav'} spacing={4} align="flex-start">
              {links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
};

export default Navbar;
