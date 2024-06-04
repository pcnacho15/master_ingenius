import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Button } from "@nextui-org/react";

export const Contacto = () => {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="isolate flex justify-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-neutral-950">
      <div className="bg-gray-200 dark:bg-neutral-900 w-3/6 py-9 rounded shadow-xl">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-naranja-logo-200 uppercase sm:text-4xl">
            Contacto
            </h2>
            <p className="mb-0 mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
            </p>
        </div>
        <form
            onSubmit={onSubmit}
            className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
                <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
                >
                Primer nombre
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="outline-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-naranja-logo-200 sm:text-sm bg-white sm:leading-6"
                />
                </div>
            </div>
            <div>
                <label
                htmlFor="last-name"
                className="outline-none block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
                >
                Segundo nombre
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="outline-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-naranja-logo-200 sm:text-sm bg-white  sm:leading-6"
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label
                htmlFor="email"
                className="outline-none block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
                >
                Correo
                </label>
                <div className="mt-2.5">
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
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
                    <option selected>COL</option>
                    </select>
                </div>
                <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="outline-none block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-naranja-logo-200 bg-white sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
                >
                Mensaje
                </label>
                <div className="mt-2.5">
                <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="outline-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-naranja-logo-200 bg-white sm:text-sm sm:leading-6"
                    defaultValue={""}
                />
                </div>
            </div>
            </div>
            <div className="mt-10">
            <Button
                variant="shadow"
                className="block w-full rounded-md bg-naranja-logo-100 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-naranja-logo-200 focus-visible:outlbuttoncus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700"
            >
                Enviar Mensaje
            </Button>
            </div>
        </form>
      </div>

    </div>
  );
};
