import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { palettes } from '../helpers/theme';
import Page from './Page';

const Payment = () => {
  const PackageTier = ({
    title,
    options,
    typePlan,
    checked = false,
    firstPayment,
    secondPayment,
  }) => {
    return (
      <Stack
        p={3}
        py={3}
        justifyContent={{
          base: 'flex-start',
          md: 'space-between',
        }}
        direction={{
          base: 'column',
          md: 'row',
        }}
        alignItems={{ md: 'center' }}
      >
        <Heading size={'sm'} maxW="25vh" textAlign="left">
          {title}
        </Heading>
        <HStack align={'top'}>
          <Box color={'white'} px={2}>
            <Icon as={FaCheckCircle} />
          </Box>
          <Text
            color={'gray.700'}
            fontSize={'lg'}
            size={'2xl'}
            textAlign="left"
          >
            {firstPayment}
          </Text>
        </HStack>
        <Text color={'gray.700'} size={'2xl'} fontSize={'lg'}>
          {secondPayment}
        </Text>
        <Stack>
          <Button
            size="md"
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}
          >
            Registrate
          </Button>
        </Stack>
      </Stack>
    );
  };

  return (
    <Page
      bgColor={palettes.green}
      vh={{ base: '80vh', sm: '70vh', md: '80vh' }}
    >
      <Box px={5} min={'100vh'}>
        <Heading fontSize={'3xl'} color="white" mb={5}>
          CUENTAS HABILITADAS Y INFORMACION DE INSCRIPCION
        </Heading>
        <Text as={'span'} color="white">
          El costo de inscripción del “XXV Congreso Boliviano de Obstetricia y
          Ginecología”
        </Text>

        <Stack spacing={4} width={'100%'} direction={'column'} mt={5}>
          <Divider />
          <PackageTier
            title={'Socios titulares (Cuotas al día) '}
            typePlan="Free"
            firstPayment="Bs. 600"
            secondPayment="Bs. 700"
          />
          <Divider />
          <PackageTier
            title={'Médicos Especialistas'}
            checked={true}
            firstPayment="Bs. 800"
            secondPayment="Bs. 900"
          />
          <Divider />
          <PackageTier
            title={'Médicos Generales y otros profesionales en salud'}
            firstPayment="Bs. 400"
            secondPayment="Bs. 500"
          />
          <Divider />
          <PackageTier
            title={'Residentes y Estudiantes'}
            firstPayment="Bs. 250"
            secondPayment="Bs. 350"
          />
        </Stack>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}
        >
          <Stack
            width={{
              base: '100%',
              md: '60%',
            }}
            textAlign={'center'}
          >
            <Heading size={'lg'}>
              BANCO UNION
              <Text color="white" fontSize="lg" mt={4}>
                NUMERO DE CUENTA EN Bs: 143076252
              </Text>
              <Text fontSize="md" mt={4}>
                A NOMBRE DE: JOSE ANTONIO AGUILAR JIMENEZ
              </Text>
            </Heading>
          </Stack>
        </Stack>
      </Box>
    </Page>
  );
};

export default Payment;
