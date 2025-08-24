import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../../elements/Button";

export default function Discuss() {
  return (
    <Fade direction="up" triggerOnce>
      <section className="flex container mx-auto justify-center px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 xl:mb-28">
        <div className="flex flex-col w-full sm:w-11/12 xl:w-10/12 rounded-2xl bg-theme-purple text-gray-100 py-14 sm:py-20 xl:py-20 px-6 sm:px-12 xl:px-16 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center text-center sm:text-left mb-6 sm:mb-9 p-5 sm:p-0">
            <h2 className="w-full sm:w-2/3 text-3xl sm:text-4xl lg:text-4xl xl:text-4xl font-semibold leading-tight">
              Need reliable cold storage to preserve your products?
            </h2>
            <Fade direction="up" triggerOnce delay={500}>
              <Button
                href="/discuss-project"
                type="link"
                className="bg-yellow-300 text-blue-800 text-lg sm:text-xl lg:text-2xl xl:text-xl tracking-wider items-center justify-center w-full sm:w-56 lg:w-96 xl:w-56 h-16 sm:h-20 lg:h-24 xl:h-20 p-5 border-2 border-dark-theme-purple shadow-xl rounded-full mt-6 sm:mt-0 sm:ml-4 xl:ml-12 transform transition duration-300 hover:scale-105 flex"
              >
                Let's Connect!
              </Button>
            </Fade>
          </div>
          <Fade delay={300} triggerOnce>
            <p className="font-light text-lg sm:text-xl lg:text-2xl xl:text-xl text-center sm:text-left px-2 sm:px-0">
              Have a specific storage requirement? Shoot us a message and let's
              make it happen!
            </p>
          </Fade>
        </div>
      </section>
    </Fade>
  );
}
