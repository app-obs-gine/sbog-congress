import { palettes } from '../helpers/theme';
import CaptionCarousel from './CaptionCarousel';
import Page from './Page';
import SinglePage from './SinglePage';

const Hero = () => {
  const cards = [
    {
      title: 'XXV CONGRESO BOLIVIANO',
      text: 'OBSTETRICIA Y GINECOLOGÍA',
      image: 'congreso-img.png',
    },
    {
      title: 'COBIJA - PANDO',
      image: 'aniversario-cobija.jpg',
    },
    {
      title: 'XXV CONGRESO BOLIVIANO DE OBSTETRICIA Y GINECOLOGÍA',
      text: 'COBIJA - PANDO',
      image: 'congreso-dark.png',
      color: 'white',
    },
  ];

  const handleInscription = () => {
    console.log('hello');
  };

  return (
    <Page
      bgColor={palettes.green}
      vh={{ base: '85vh', sm: '250vh', md: '110vh' }}
    >
      <SinglePage
        bgColor={palettes.green}
        title="XXV CONGRESO BOLIVIANO DE OBSTETRICIA Y GINECOLOGÍA"
        titleSpan="COBIJA - PANDO"
        text="Está enfocado al desarrollo de los cursos pre congreso, mismos que serán internacionales con cupos limitados y que a saber serán los siguientes:"
        textButtonPrimary="Inscripciones"
        textButtonSecondary="Mas Informacion"
        handleInscription={handleInscription}
      />
      <CaptionCarousel cards={cards} />
    </Page>
  );
};

export default Hero;
