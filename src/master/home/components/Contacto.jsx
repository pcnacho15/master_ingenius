import { useDispatch, useSelector } from "react-redux";
import { Button } from "@nextui-org/react";
import { InstagramIcon } from "../../icons/InstagramIcon";
import { WhatsAppIcon } from "../../icons/WhatsAppIcon";
import { useForm } from "../../../hooks";
import { startSaveMessage } from "../../../store/master";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const Contacto = () => {
  const dispatch = useDispatch();
  const { isSaving, messageSaved } = useSelector((state) => state.contacto);

  const {
    nombre,
    correo,
    celular,
    mensaje,
    formState,
    onResetForm,
    onInputChange,
  } = useForm({
    nombre: "",
    correo: "",
    celular: "",
    mensaje: "",
  });

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: messageSaved,
        showConfirmButton: false,
        timer: 1500,
      });

      onResetForm();
    }
  }, [messageSaved]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startSaveMessage(formState));
  };

  return (
    <div
      id="contacto"
      className="isolate flex justify-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-neutral-950 transition-all ease-in-out duration-400"
    >
      <div className="bg-gray-200 dark:bg-neutral-900 w-auto xl:w-3/6 px-5 py-9 rounded shadow-xl transition-all ease-in-out duration-400">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold uppercase mb-5 pb-5 relative text-naranja-logo-200 before:content-[''] before:absolute before:block before:w-28 before:h-[1px] 
            before:bg-slate-200 before:bottom-[1px] before:left-[calc(50% - 60px)] before:right-[39%] sm:before:right-[41%] md:before:right-[44%] lg:before:right-[43%]
              after:content-[''] after:absolute after:block after:w-[40px] after:h-[3px] after:bg-naranja-logo-100 
              after:bottom-0 after:left-[calc(50% - 20px)] after:right-[47%] md:after:right-[48%]"
          >
            Contacto
          </h2>
          <p className="mb-0 mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
            Nos puedes dejar tu mensaje con la duda o sugerencia que tengas, con
            gusto nuestro equipo te atenderá en el menor tiempo posible. También
            nos puedes contactar por los siguientes medios: <br />
            <br />
            <strong>Correo: info@masteringenius.com</strong>
          </p>
          <div className="mt-5 flex justify-center">
            <a
              href="https://www.instagram.com/master_ingenius?igsh=ejBpYTQ3NzNpMXgz"
              target="_blank"
              className="text-lg inline-block bg-naranja-logo-100 text-white leading-3 py-[10px] px-0 mr-2 rounded-full text-center w-9 h-9 transition-all duration-400 ease-in-out hover:bg-naranja-logo-200 hover:no-underline hover:scale-125"
            >
              <i className="ml-[1px] grid place-content-center">
                <InstagramIcon />
              </i>
            </a>
            <a
              href="https://wa.link/chigtk"
              target="_blank"
              className="text-lg inline-block bg-naranja-logo-100 text-white leading-3 py-[10px] px-0 mr-2 rounded-full text-center w-9 h-9 transition-all duration-400 ease-in-out hover:bg-naranja-logo-200 hover:no-underline hover:scale-125"
            >
              <i className="ml-[1px] grid place-content-center">
                <WhatsAppIcon />
              </i>
            </a>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="mx-auto mt-10 max-w-xl"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200 after:content-['_*'] after:text-red-600"
              >
                Nombre
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="text"
                  name="nombre"
                  value={nombre}
                  id="first-name"
                  autoComplete="given-name"
                  onChange={onInputChange}
                  className="outline-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-naranja-logo-200 sm:text-sm bg-white sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="outline-none block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200 after:content-['_*'] after:text-red-600"
              >
                Correo
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="email"
                  name="correo"
                  value={correo}
                  id="email"
                  autoComplete="email"
                  onChange={onInputChange}
                  className="outline-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-naranja-logo-200 sm:text-sm bg-white sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="outline-none block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
              >
                Número de celular
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <select
                    disabled
                    id="country"
                    name="country"
                    className="outline-none appearance-none h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-naranja-logo-200 sm:text-sm"
                  >
                    <option>COL</option>
                  </select>
                </div>
                <input
                  type="tel"
                  name="celular"
                  value={celular}
                  id="phone-number"
                  autoComplete="tel"
                  onChange={onInputChange}
                  className="outline-none block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-naranja-logo-200 bg-white sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200 after:content-['_*'] after:text-red-600"
              >
                Mensaje
              </label>
              <div className="mt-2.5">
                <textarea
                  required
                  name="mensaje"
                  id="message"
                  value={mensaje}
                  rows={4}
                  onChange={onInputChange}
                  className="outline-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-naranja-logo-200 bg-white sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Button
              type="submit"
              isLoading={isSaving}
              variant="shadow"
              className="w-full rounded-md bg-naranja-logo-100 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-naranja-logo-200"
            >
              Enviar Mensaje
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
