import Meta from '../components/Meta';
import Hero from '../components/Hero';
import Information from '../components/Information';
import Payment from '../components/Payment';
import ModalInscription from '../components/ModalInscription';

export default function Home() {
  return (
    <>
      <Meta title="Congreso Boliviano Obstetrica y Ginecologia" />
      <Hero />
      <Information />
      <Payment />
    </>
  );
}
