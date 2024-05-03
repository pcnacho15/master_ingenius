import { Clientes } from "../components/Clientes";
import { Header } from "../components/Header";
import { Nosotros } from "../components/Nosotros";

export const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Nosotros />
        <Clientes />
      </div>
    </>
  );
};
