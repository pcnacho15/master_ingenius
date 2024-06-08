// import { Clientes } from "../components/Clientes";
import { ClientesSecond } from "../components/ClientesSecond";
import { Contacto } from "../components/Contacto";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Nosotros } from "../components/Nosotros";
import { Servicios } from "../components/servicios";

export const Home = () => {
  return (
    <>
      <Header />
      <ClientesSecond />
      {/* <Clientes /> */}
      <Nosotros />
      <Servicios />
      <Contacto />
      <Footer />
    </>
  );
};
