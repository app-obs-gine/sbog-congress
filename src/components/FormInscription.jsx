import { useRef, useState } from 'react';
import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';

const inscriptionEmpty = {
  firstName: '',
  name: '',
  ci: '',
  inscriptionType: '',
  department: '',
  amountDeposited: 0,
  email: '',
  baucherImg: '',
  numberPhone: '',
};

const validatorForm = {
  firstName: false,
  name: false,
  ci: false,
  gender: false,
  isMember: false,
  inscriptionType: false,
  department: false,
  amountDeposited: false,
  email: false,
  baucherImg: false,
  numberPhone: false,
};

const FormInscription = () => {
  const [validator, setValidator] = useState(validatorForm);
  const { handleInputChange, values, reset } = useForm(inscriptionEmpty);
  const [isMember, setIsMember] = useState();
  const [gender, setGender] = useState();
  const {
    firstName,
    name,
    ci,
    inscriptionType,
    department,
    amountDeposited,
    email,
    baucherImg,
    numberPhone,
  } = values;

  const isErrorEmail = (email) => email === '';

  return (
    <Flex flexDir="column" gap={2}>
      <FormControl isInvalid={validator.name}>
        <FormLabel htmlFor="email">NOMBRES</FormLabel>
        <Input
          id="name"
          name="name"
          type="text"
          value={name}
          autoComplete="off"
          onChange={handleInputChange}
        />
        {validator.name && (
          <FormErrorMessage>Nombre es requerido</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={validator.firstName}>
        <FormLabel htmlFor="firstName">APELLIDOS</FormLabel>
        <Input
          id="text"
          type="firstName"
          name="firstName"
          value={firstName}
          autoComplete="off"
          onChange={handleInputChange}
        />
        {validator.firstName && (
          <FormErrorMessage>Apellidos es requerido</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={validator.ci}>
        <FormLabel htmlFor="ci">CI</FormLabel>
        <Flex flexDir="row" gap={3}>
          <Input
            id="ci"
            type="number"
            name="ci"
            value={ci}
            autoComplete="off"
            onChange={handleInputChange}
          />
          <Select placeholder="Expedito en:" w="50%">
            <option value="CH">CH</option>
            <option value="LP">LP</option>
            <option value="CB">CB</option>
            <option value="OR">OR</option>
            <option value="PT">PT</option>
            <option value="TJ">TJ</option>
            <option value="SC">SC</option>
            <option value="BE">BE</option>
            <option value="PD">PD</option>
          </Select>
          {validator.ci && <FormErrorMessage>CI es requerido</FormErrorMessage>}
        </Flex>
      </FormControl>

      <FormControl isInvalid={validator.numberPhone}>
        <FormLabel htmlFor="numberPhone">NUMERO DE CELULAR:</FormLabel>
        <Flex flexDir="row" gap={3}>
          <Input
            id="numberPhone"
            type="number"
            name="numberPhone"
            value={numberPhone}
            autoComplete="off"
            onChange={handleInputChange}
          />
          {validator.numberPhone && (
            <FormErrorMessage>
              El numero de celular es requerido
            </FormErrorMessage>
          )}
        </Flex>
      </FormControl>

      <FormControl isInvalid={validator.email}>
        <FormLabel htmlFor="email">EMAIL</FormLabel>
        <Input
          id="email"
          type="email"
          name="email"
          value={email}
          autoComplete="off"
          onChange={handleInputChange}
        />
        {validator.email && (
          <FormErrorMessage>Email es requerido</FormErrorMessage>
        )}
      </FormControl>

      <Stack direction="row" py={4}>
        <Text>SEXO: </Text>
        <RadioGroup onChange={setGender} value={gender}>
          <Stack direction="row">
            <Radio value="M">Masculino</Radio>
            <Radio value="F">Femenino</Radio>
          </Stack>
        </RadioGroup>
      </Stack>
      <Select placeholder="DEPARTAMENTO DE RESIDENCIA:">
        <option value="LA PAZ">LA PAZ</option>
        <option value="ORURO">ORURO</option>
        <option value="POTOSI">POTOSI</option>
        <option value="SUCRE">SUCRE</option>
        <option value="COCHABAMBA">COCHABAMBA</option>
        <option value="TARIJA">TARIJA</option>
        <option value="COBIJA">COBIJA</option>
        <option value="BENI">BENI</option>
        <option value="PANDO">PANDO</option>
      </Select>
      <Divider />
      <Stack direction="row" py={4}>
        <Text>MIEMBRO DE SOCIEDAD DE GINECOLOGIA: </Text>
        <RadioGroup onChange={setIsMember} value={isMember}>
          <Stack direction="row">
            <Radio colorScheme="green" value="1">
              Si
            </Radio>
            <Radio colorScheme="red" value="2">
              No
            </Radio>
          </Stack>
        </RadioGroup>
      </Stack>
      <FormControl isInvalid={validator.amountDeposited}>
        <FormLabel htmlFor="amountDeposited">MONTO DEPOSITADO:</FormLabel>
        <Flex flexDir="row" gap={3}>
          <Input
            id="amountDeposited"
            type="number"
            name="amountDeposited"
            value={amountDeposited}
            autoComplete="off"
            onChange={handleInputChange}
          />
          {validator.amountDeposited && (
            <FormErrorMessage>
              El monto depositado es requerido
            </FormErrorMessage>
          )}
        </Flex>
      </FormControl>
      <HStack justifyContent="center" mt={6}>
        <Button colorScheme="facebook" leftIcon={<FaCloudUploadAlt />}>
          SUBIR IMAGEN BAUCER O DEPOSITO
        </Button>
      </HStack>
      <Divider />
    </Flex>
  );
};

export default FormInscription;
