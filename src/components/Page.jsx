import { Container, Stack, Box } from '@chakra-ui/react';

const Page = ({
  children,
  bgColor,
  vh = '100vh',
  py = { base: 20, md: 20 },
}) => {
  return (
    <Box bgColor={bgColor} h={vh} maxH="150vh" overflow="hidden" maxW="2000px">
      <Container maxW={'7xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={py}
        >
          {children}
        </Stack>
      </Container>
    </Box>
  );
};

export default Page;
