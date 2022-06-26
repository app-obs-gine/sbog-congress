import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { palettes } from '../helpers/theme';
import ModalInscription from './ModalInscription';
import Page from './Page';
import TableContent from './TableContent';

const titlesTable = [
  { title: '', key: '1' },
  { title: 'Inscripción hasta 31/07/2022', key: '2' },
  { title: 'Inscripción a partir del 01/08/2022 ', key: '3' },
  { title: '', key: '4' },
];

const contentRow1 = [
  { content: 'Socios titulares (Cuotas al día)', key: '1' },
  { content: 'Bs. 600 ', key: '2' },
  { content: 'Bs. 700 ', key: '3' },
  { content: <ModalInscription text="Inscripciones" />, key: '4' },
];
const contentRow2 = [
  { content: 'Médicos Especialistas ', key: '1' },
  { content: 'Bs. 800 ', key: '2' },
  { content: 'Bs. 900 ', key: '3' },
  { content: <ModalInscription text="Inscripciones" />, key: '4' },
];
const contentRow3 = [
  { content: 'Médicos Generales y otros profesionales en salud', key: '1' },
  { content: 'Bs. 400 ', key: '2' },
  { content: 'Bs. 500 ', key: '3' },
  { content: <ModalInscription text="Inscripciones" />, key: '4' },
];
const contentRow4 = [
  { content: 'Residentes y Estudiantes', key: '1' },
  { content: 'Bs. 250 ', key: '2' },
  { content: 'Bs. 350 ', key: '3' },
  { content: <ModalInscription text="Inscripciones" />, key: '4' },
];
const rows = [
  { contentTable: contentRow1, key: '1' },
  { contentTable: contentRow2, key: '2' },
  { contentTable: contentRow3, key: '2' },
  { contentTable: contentRow4, key: '2' },
];

const Payment = () => {
  const PackageTier = ({ title, firstPayment, secondPayment }) => {
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
      vh={{ base: '110vh', sm: '70vh', md: '80vh' }}
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
          <TableContent titles={titlesTable} rows={rows} />
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
