import { useEffect } from "react";
import { FacebookIcon } from "../../icons/FacebookIcon";

// aos animation
import AOS from "aos";
import "aos/dist/aos";

export const Servicios = () => {

    useEffect(() => {
      AOS.init();
    }, []);

  return (
    <>
      <section
        id="servicios"
        className="bg-section-bg dark:bg-neutral-950 mt-32"
      >
        <div data-aos="fade-up">
          <div className="text-center pb-[30px] py-20 px-5 lg:px-48">
            <h2
              className="text-3xl font-bold uppercase mb-5 pb-5 relative text-naranja-logo-200 before:content-[''] before:absolute before:block before:w-28 before:h-[1px] 
            before:bg-slate-200 before:bottom-[1px] before:left-[calc(50% - 60px)] before:right-[39%] sm:before:right-[41%] md:before:right-[44%] lg:before:right-[46.1%]
              after:content-[''] after:absolute after:block after:w-[40px] after:h-[3px] after:bg-naranja-logo-100 
              after:bottom-0 after:left-[calc(50% - 20px)] after:right-[47%] md:after:right-[49%]"
            >
              Servicios
            </h2>
            <p className="mb-0 mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              sunt, nemo ex sapiente molestiae at tempora maxime laboriosam
              mollitia deleniti modi, iusto ipsa delectus. At itaque distinctio
              delectus saepe. Consequatur?
            </p>
          </div>

          <div className="grid gap-6 grid-cols-4 py-20 px-5 mt-5">
            <div
              className="col-span-4 md:col-span-1 flex items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="shadow-xl rounded py-[50px] px-[30px] transition-all ease-in-out duration-400 bg-white dark:bg-neutral-900 hover:translate-y-[-10px]">
                <div className="mb-[10px]">
                  <i className="text-naranja-logo-100 text-4xl transition duration-300">
                    <FacebookIcon />
                  </i>
                </div>
                <h4 className="font-medium mb-4 text-base">
                  <a
                    href=""
                    className="text-gray-500 transition ease-in-out duration-300 hover:text-naranja-logo-100"
                  >
                    Lorem Ipsum
                  </a>
                </h4>
                <p className="leading-6 text-sm mb-0">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            <div
              className="col-span-4 md:col-span-1 flex items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="shadow-xl rounded py-[50px] px-[30px] transition-all ease-in-out duration-400 bg-white dark:bg-neutral-900 hover:translate-y-[-10px]">
                <div className="mb-[10px]">
                  <i className="text-naranja-logo-100 text-4xl transition duration-300">
                    <FacebookIcon />
                  </i>
                </div>
                <h4 className="font-medium mb-4 text-base">
                  <a
                    href=""
                    className="text-gray-500 transition ease-in-out duration-300 hover:text-naranja-logo-100"
                  >
                    Lorem Ipsum
                  </a>
                </h4>
                <p className="leading-6 text-sm mb-0">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            <div
              className="col-span-4 md:col-span-1 flex items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="shadow-xl rounded py-[50px] px-[30px] transition-all ease-in-out duration-400 bg-white dark:bg-neutral-900 hover:translate-y-[-10px]">
                <div className="mb-[10px]">
                  <i className="text-naranja-logo-100 text-4xl transition duration-300">
                    <FacebookIcon />
                  </i>
                </div>
                <h4 className="font-medium mb-4 text-base">
                  <a
                    href=""
                    className="text-gray-500 transition ease-in-out duration-300 hover:text-naranja-logo-100"
                  >
                    Lorem Ipsum
                  </a>
                </h4>
                <p className="leading-6 text-sm mb-0">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            <div
              className="col-span-4 md:col-span-1 flex items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="shadow-xl rounded py-[50px] px-[30px] transition-all ease-in-out duration-400 bg-white dark:bg-neutral-900 hover:translate-y-[-10px]">
                <div className="mb-[10px]">
                  <i className="text-naranja-logo-100 text-4xl transition duration-300">
                    <FacebookIcon />
                  </i>
                </div>
                <h4 className="font-medium mb-4 text-base">
                  <a
                    href=""
                    className="text-gray-500 transition ease-in-out duration-300 hover:text-naranja-logo-100"
                  >
                    Lorem Ipsum
                  </a>
                </h4>
                <p className="leading-6 text-sm mb-0">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
