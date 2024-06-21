import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
} from "@nextui-org/react";

export const ServiciosItem = ({ servicio }) => {
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <div
      onClick={onOpen}
      className="col-span-3 md:col-span-1 flex items-stretch"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <Card
        isFooterBlurred
        className="cursor-pointer w-full h-[300px] col-span-12 sm:col-span-7 shadow-none transition-all ease-in-out duration-400 hover:translate-y-[-10px] hover:shadow-lg"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start backdrop-saturate-50">
          <p className="text-sm  text-white/75 font-semibold">
            {servicio.subDescripcion}
          </p>
          <h4 className="text-white/90 font-bold text-xl">{servicio.titulo}</h4>
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
          <Modal
            size="3xl"
            placement="center"
            backdrop="blur"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            onClose={onClose}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalBody className="grid grid-cols-2 gap-7 p-10">
                    <div className="col-span-2 md:col-span-1">
                      <Image
                        removeWrapper
                        alt={servicio.titulo}
                        className="z-0 h-96 w-full"
                        src={servicio.img}
                      />
                    </div>
                    <div className="col-span-2 md:col-span-1 flex flex-col">
                      <h4 className="text-2xl font-bold text-gray-900 sm:pr-12 mb-3">
                        {servicio.titulo}
                      </h4>
                      <p className="h-full">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis, possimus eum, ducimus, quas est reiciendis
                        exercitationem quod accusamus animi porro quia. Aliquid
                        sint placeat temporibus cumque voluptatum minima
                        possimus cupiditate!
                      </p>
                      <Button
                        color="warning"
                        variant="shadow"
                        size="lg"
                        className="text-white text-sm pb-[0.5px] font-semibold"
                      >
                        Action
                      </Button>
                    </div>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </CardFooter>
      </Card>
    </div>
  );
};
