import React from "react";
import heroSvg from "../../assets/hero.svg";
import plusSvg from "../../assets/plus.svg";
import Cards from "./cards";

function hero(props) {
  return (
    <section className="bg-lightUi rounded-bl-3xl rounded-br-3xl relative">
      <div className="mx-auto max-w-screen-lg px-2 py-8 sm:px-2 sm:py-12  lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-18">
          <div className="relative h-96 lg:h-full order-1 lg:order-2 overflow-hidden flex justify-center lg:justify-end items-center rounded-lg sm:h-0 lg:order-last lg:h-full">
            <img
              alt="doctor"
              data-aos="fade-up"
              src={heroSvg}
              className="scale-1 absolute h-68 lg:h-96 lg:w-96 object-cover"
            />
            <img
              alt="doctor_widget"
              src={plusSvg}
              className="absolute h-12 w-12 top-4 left-36"
            />
            <img
              alt="doctor_widget"
              src={plusSvg}
              className="absolute h-8 w-8 top-52 left-12"
            />
            <img
              alt="doctor_widget"
              src={plusSvg}
              className="absolute h-6 w-6 bottom-16 right-24"
            />
            <img
              alt="doctor_widget"
              src={plusSvg}
              className="absolute h-4 w-4 top-28 right-4"
            />
          </div>

          <div className="text-center lg:py-24 order-1 lg:order-1">
            <p className="text-greenUi my-3 text-[22px]">
              Dr. Matthew Anderso2
            </p>
            <h2 className="font-bold text-t28 sm:text-[48px] text-blackUi leading-snug">
              A dedicated doctor you can trust
            </h2>

            <p className="mt-6 text-t16 text-lightBlueUi">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              eget vel, nunc nulla feugiat. Metus ut.
            </p>

            <div className="hidden md:inline-block my-6">
              <a
                href="javascript:void(0)"
                className="flex items-center gap-x-2 py-2 px-4 text-white bg-gradient-to-r from-sky-500 to-sky-600 rounded-3xl shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M21.5 11.5C21.5034 12.8199 21.1951 14.1219 20.6 15.3C19.8944 16.7118 18.8098 17.8992 17.4674 18.7293C16.1251 19.5594 14.5782 19.9994 13 20C11.6801 20.0035 10.3781 19.6951 9.2 19.1L3.5 21L5.4 15.3C4.80493 14.1219 4.49656 12.8199 4.5 11.5C4.50061 9.92179 4.94061 8.37488 5.77072 7.03258C6.60083 5.69028 7.78825 4.6056 9.2 3.90003C10.3781 3.30496 11.6801 2.99659 13 3.00003H13.5C15.5843 3.11502 17.553 3.99479 19.0291 5.47089C20.5052 6.94699 21.385 8.91568 21.5 11V11.5Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                <span className="text-t15 md:text-[18px]">
                  Book an appointment
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[70%] relative  lg:absolute lg:-bottom-12 left-[50%] -translate-x-2/4 flex justify-center items-center gap-x-6">
        <Cards />
      </div>
    </section>
  );
}

export default hero;
