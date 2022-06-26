import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import FormInscription from './FormInscription';

const ModalInscription = ({ text }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        rounded={'full'}
        px={6}
        colorScheme={'orange'}
        bg={'orange.400'}
        _hover={{ bg: 'orange.500' }}
        size="lg"
        onClick={onOpen}
      >
        {text}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mt={4}>
            INSCRIPCIONES PARA XXV CONGRESO BOLIVIANO
            <Text fontSize="md" textAlign="center">
              OBSTETRICIA Y GINECOLOGÍA COBIJA - PANDO
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* Form of the inscription */}
            <FormInscription />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalInscription;
