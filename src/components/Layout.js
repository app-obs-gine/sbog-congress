import { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [login, setLogin] = useState('public');
  const linksPublic = ['Home', 'Simposios', 'About'];
  const linksPrivate = ['Lista de Registrados', 'Estadisticas'];
  const link = login === 'public' ? linksPublic : linksPrivate;
  return (
    <>
      <Navbar links={link} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
