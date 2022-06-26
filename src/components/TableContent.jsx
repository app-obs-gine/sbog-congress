import {
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';

const TableContent = ({ titles = [], rows = [], footers = [] }) => {
  return (
    <Flex overflow="auto" maxW={{ base: '40vh', sm: '40vh', md: '120vh' }}>
      <Table variant="simple" size={{ base: 'sm', sm: 'sm', md: 'md' }}>
        <Thead>
          <Tr>
            {titles.map(({ title, key }) => (
              <Th color="dark" fontSize="md" key={key}>
                {title}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map(({ contentTable, key }) => (
            <Tr key={key}>
              {contentTable.map(({ content, key }) => (
                <Td key={key} fontSize="lg">
                  {content}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            {footers.map(({ foot, key }) => {
              <Td key={key}>{foot}</Td>;
            })}
          </Tr>
        </Tfoot>
      </Table>
    </Flex>
  );
};

export default TableContent;
