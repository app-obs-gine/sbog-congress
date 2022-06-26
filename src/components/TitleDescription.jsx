import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
  HStack,
} from '@chakra-ui/react';
import { AiFillMedicineBox } from 'react-icons/ai';
import { FaClinicMedical, FaHandHoldingMedical, FaLaptopMedical } from 'react-icons/fa';
import { BsCheck2Square } from 'react-icons/bs';

const Feature = ({ text, icon, iconBg, descriptions = [] }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Flex flexDir="column" gap={2} textAlign="left" pl={2}>
        <Text fontWeight={600} fontSize={'xl'}>
          {text}
        </Text>
        {descriptions.map(({ text, key }) => (
          <HStack key={key} align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={BsCheck2Square} />
            </Box>
            <Text color={'gray.700'} fontSize={'lg'}>
              {text}
            </Text>
          </HStack>
        ))}
      </Flex>
    </Stack>
  );
};

const TitleDescription = () => {
  return (
    <Container maxW={'6xl'}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            Informacion
          </Text>
          <Heading fontSize={'3xl'}>
            XXV CONGRESO BOLIVIANO DE OBSTETRICIA Y GINECOLOGÍA COBIJA - PANDO
          </Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            El desarrollo del congreso y la participación con trabajos deben
            enfocarse en los siguientes capítulos:
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <Feature
              icon={
                <Icon as={AiFillMedicineBox} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Día 13/09/2022'}
              descriptions={[
                {
                  text: 'Obstetricia Crítica (Sepsis y Preeclampsia)',
                  key: '1',
                },
                {
                  text: 'Control de sangrado obstétrico',
                  key: '2',
                },
                {
                  text: 'Colposcopia',
                  key: '3',
                },
              ]}
            />
            <Feature
              icon={
                <Icon as={FaLaptopMedical} color={'green.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Día 14/09/2022'}
              descriptions={[
                {
                  text: 'Covid-19 y embarazo',
                  key: '1',
                },
                {
                  text: 'Piso pelvico ',
                  key: '2',
                },
              ]}
            />
            <Feature
              icon={
                <Icon as={FaClinicMedical} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Día 15/09/2022'}
              descriptions={[
                {
                  text: 'Embarazo y adolescencia',
                  key: '1',
                },
                {
                  text: 'Cirugia ginecoloógica minimamente invasiva',
                  key: '2',
                },
              ]}
            />
            <Feature
              icon={
                <Icon as={FaHandHoldingMedical} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Día 16/09/2022'}
              descriptions={[
                {
                  text: 'Prematuridad',
                  key: '1',
                },
                {
                  text: 'Patología mamaria',
                  key: '2',
                },
              ]}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'Madre Boliviana'}
            src={'mother.png'}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default TitleDescription;
