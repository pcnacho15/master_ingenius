// import { Clientes } from "../components/Clientes";
import { ClientesSecond } from "../components/ClientesSecond";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Nosotros } from "../components/Nosotros";
import { Servicios } from "../components/Servicios";

export const Home = () => {
  return (
    <>
      <div className="">
        <Header />
        <ClientesSecond />
        {/* <Clientes /> */}
        <Nosotros />
        <Servicios />
        <Footer />
      </div>
    </>
  );
};
