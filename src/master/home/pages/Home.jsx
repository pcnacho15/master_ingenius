import { Clientes } from "../components/Clientes";
import { Header } from "../components/Header";
import { Nosotros } from "../components/Nosotros";
import { Servicios } from "../components/Servicios";

export const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Nosotros />
        <Clientes />
        <Servicios />
      </div>
    </>
  );
};
