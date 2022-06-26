import { Flex, Heading, Stack, Text, Button } from '@chakra-ui/react';
import { AiFillMedicineBox } from 'react-icons/ai';
import { FaLaptopMedical } from 'react-icons/fa';
import { MdBloodtype } from 'react-icons/md';
import IconItems from './IconItems';
import ModalInscription from './ModalInscription';

const SinglePage = ({
  handleInscription,
  title,
  titleSpan,
  text,
  textButtonPrimary,
  textButtonSecondary,
  titleSpanColor = 'white',
  showIcons = true,
  textColor = 'white',
}) => {
  return (
    <>
      <Heading
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
        lineHeight={'110%'}
        mb={10}
      >
        {title}
        {titleSpan && (
          <>
            <br />
            <Text as={'span'} color={titleSpanColor}>
              {titleSpan}
            </Text>
          </>
        )}
      </Heading>
      <Text color={textColor} maxW={'3xl'} pb={5}>
        {text}
      </Text>
      {showIcons && (
        <Flex
          justifyContent="space-evenly"
          gap={{ base: 10, sm: 5, md: 36 }}
          pb={5}
          flexDir={{ base: 'column', sm: 'column', md: 'row' }}
        >
          <IconItems
            icon={MdBloodtype}
            text="Control de sangrado"
            description="Obstétrico"
            colorIcon="#fe5f55"
            colorText="white"
          />
          <IconItems
            icon={AiFillMedicineBox}
            text="Obstetricia Crítica"
            description=" (Sepsis y Preeclampsia)"
            colorIcon="#f4f1bb"
            colorText="#f4f1bb"
          />

          <IconItems
            icon={FaLaptopMedical}
            text="Colposcopia"
            colorIcon="#0B4F6C"
            colorText="#0B4F6C"
          />
        </Flex>
      )}

      <Stack
        spacing={6}
        direction={{ base: 'column', sm: 'column', md: 'row' }}
      >
        {textButtonSecondary && <ModalInscription text={textButtonPrimary} />}
        {textButtonSecondary && (
          <Button rounded={'full'} px={6} size="lg">
            {textButtonSecondary}
          </Button>
        )}
      </Stack>
    </>
  );
};

export default SinglePage;
