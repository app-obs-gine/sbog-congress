import {
  Box,
  Container,
  Divider,
  Flex,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { palettes } from '../helpers/theme';
import { SocialButton } from './SocialButton';

const Footer = () => {
  return (
    <Box
      bgColor={palettes.green}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Image src="logo_white.png" alt="logo SBOG" width="92px" />
        <Flex flexDir="column" alignItems="center" gap={2}>
          <Text color="white">
            Congreso Boliviano de Obstetrica y Ginecologica
          </Text>
          <Text color="white"> Copyright © 2022 - SBOG</Text>
        </Flex>

        <Stack direction={'row'} spacing={6}>
          <Link></Link>
          <SocialButton label={'Twitter'} href={'#'}>
            <Icon as={FaTwitter} fontSize="1xl" color="white" />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <Icon as={FaYoutube} fontSize="1xl" color="white" />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <Icon as={FaInstagram} fontSize="1xl" color="white" />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
