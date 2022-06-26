import { Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const IconItems = ({ icon, text, description, colorIcon, colorText }) => {
  return (
    <Flex alignItems="center" gap={0.5}>
      <Icon
        as={icon}
        fontSize="2xl"
        className="active-icon"
        transition={'background 0.3s ease'}
        bg={useColorModeValue('green.300', 'green.300')}
        rounded={'full'}
        w={12}
        h={12}
        p={1.5}
        color={colorIcon}
      />
      <Flex flexDir="column" color={colorText}>
        <Text>{text}</Text>
        {description && <Text fontSize="xs">{description}</Text>}
      </Flex>
    </Flex>
  );
};

export default IconItems;
