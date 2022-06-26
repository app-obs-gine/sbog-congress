import { Heading, Text } from '@chakra-ui/react';
import { palettes } from '../helpers/theme';
import Page from './Page';
import SinglePage from './SinglePage';
import TitleDescription from './TitleDescription';

const Information = () => {
  return (
    <Page
      bgColor={palettes.gray}
      vh={{ base: '85vh', sm: '250vh', md: '110vh' }}
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
        lineHeight={'110%'}
        mb={10}
      >
        INFORMACION DEL CONGRESO
        <br />
        <br />
        <Text as={'span'} color={palettes.green}>
          TEMAS ESTABLECIDOS DEL CONGRESO
        </Text>
      </Heading>

      <TitleDescription />
    </Page>
  );
};

export default Information;
