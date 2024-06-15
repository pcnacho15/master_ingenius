import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

export const ServiciosItem = ({ servicio }) => {
  return (
    <div
      className="col-span-3 md:col-span-1 flex items-stretch"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7 shadow-none transition-all ease-in-out duration-400 hover:translate-y-[-10px] hover:shadow-lg"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start backdrop-saturate-50">
          <p className="text-sm  text-white/75 font-semibold">
            {servicio.subDescripcion}
          </p>
          <h4 className="text-white/90 font-bold text-xl">
            {servicio.titulo}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt={servicio.titulo}
          className="z-0 w-full h-full object-cover brightness-50"
          src={servicio.img}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-naranja-logo-200">Master Ingenius</p>
              <p className="text-tiny text-white/60">{servicio.eslogan}</p>
            </div>
          </div>
          <Button
            radius="full"
            size="sm"
            className="ml-1"
          >
            Ver más
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
