import Head from 'next/head';

const Meta = ({
  title = 'SBOG',
  keywords = 'congreso, obstrtrica, ginecologia, bolivia',
  description = 'XXV CONGRESO BOLIVIANO DE OBSTETRICIA Y GINECOLOGÍA COBIJA - PANDO',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
      </Head>
    </>
  );
};

export default Meta;
