import whitePlus from "../../assets/white_plus.png";
const footer = () => {
  return (
    <footer class="bg-doctorUigradient">
      <div class="mx-auto max-w-screen-lg px-6 pb-8 pt-8 sm:px-6 lg:px-8">
        <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-2 items-center">
          <div class="">
            <div className="relative w-32 pt-4">
              <span className="text-whiteUi text-[32px] font-bold">Doctor</span>
              <img
                src={whitePlus}
                className="w-12 h-12 absolute top-1 right-0"
                alt=""
              />
            </div>

            <p className="text-[16px] w-3/4 py-4 text-whiteUi font-normal italic">
              8 W. South St.Buford, GA 30518 <br /> 5Briarwood LaneVienna, VA
              22180 RER
            </p>

            <div class="mt-6 flex justify-center gap-8 lg:justify-start">
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only"> Youtube </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M22.6667 26.6666H9.33333C5.33333 26.6666 2.66667 23.9999 2.66667 19.9999V11.9999C2.66667 7.99992 5.33333 5.33325 9.33333 5.33325H22.6667C26.6667 5.33325 29.3333 7.99992 29.3333 11.9999V19.9999C29.3333 23.9999 26.6667 26.6666 22.6667 26.6666Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.2 12.6667L18.5333 14.6667C19.7333 15.4667 19.7333 16.6667 18.5333 17.4667L15.2 19.4667C13.8667 20.2667 12.8 19.6 12.8 18.1333V14.1333C12.8 12.4 13.8667 11.8667 15.2 12.6667Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only"> Facebook </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M18.6667 12.4V16.2667H22.1333C22.4 16.2667 22.5333 16.5333 22.5333 16.8L22 19.3333C22 19.4667 21.7333 19.6 21.6 19.6H18.6667V29.3333H14.6667V19.7333H12.4C12.1333 19.7333 12 19.6 12 19.3333V16.8C12 16.5333 12.1333 16.4 12.4 16.4H14.6667V12C14.6667 9.73333 16.4 8 18.6667 8H22.2667C22.5333 8 22.6667 8.13333 22.6667 8.4V11.6C22.6667 11.8667 22.5333 12 22.2667 12H19.0667C18.8 12 18.6667 12.1333 18.6667 12.4Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M20 29.3334H12C5.33333 29.3334 2.66667 26.6667 2.66667 20.0001V12.0001C2.66667 5.33341 5.33333 2.66675 12 2.66675H20C26.6667 2.66675 29.3333 5.33341 29.3333 12.0001V20.0001C29.3333 26.6667 26.6667 29.3334 20 29.3334Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                class="text-gray-700 transition hover:text-gray-700/75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only"> whatapps </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M9.2 27.4667C11.2 28.6667 13.6 29.3334 16 29.3334C23.3333 29.3334 29.3333 23.3334 29.3333 16.0001C29.3333 8.66675 23.3333 2.66675 16 2.66675C8.66666 2.66675 2.66666 8.66675 2.66666 16.0001C2.66666 18.4001 3.33333 20.6667 4.4 22.6667L3.10711 27.6394C2.91238 28.3883 3.60559 29.0652 4.34965 28.8526L9.2 27.4667Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 19.798C22 20.014 21.9519 20.236 21.8498 20.452C21.7476 20.668 21.6154 20.872 21.4412 21.064C21.1467 21.388 20.8222 21.622 20.4557 21.772C20.0951 21.922 19.7046 22 19.2839 22C18.671 22 18.016 21.856 17.325 21.562C16.634 21.268 15.9429 20.872 15.2579 20.374C14.5669 19.87 13.9119 19.312 13.2869 18.694C12.668 18.07 12.1092 17.416 11.6104 16.732C11.1177 16.048 10.7211 15.364 10.4326 14.686C10.1442 14.002 10 13.348 10 12.724C10 12.316 10.0721 11.926 10.2163 11.566C10.3605 11.2 10.5889 10.864 10.9074 10.564C11.2919 10.186 11.7126 10 12.1572 10C12.3255 10 12.4937 10.036 12.644 10.108C12.8002 10.18 12.9384 10.288 13.0466 10.444L14.4407 12.406C14.5488 12.556 14.6269 12.694 14.681 12.826C14.7351 12.952 14.7651 13.078 14.7651 13.192C14.7651 13.336 14.7231 13.48 14.639 13.618C14.5608 13.756 14.4467 13.9 14.3025 14.044L13.8458 14.518C13.7797 14.584 13.7496 14.662 13.7496 14.758C13.7496 14.806 13.7556 14.848 13.7677 14.896C13.7857 14.944 13.8037 14.98 13.8157 15.016C13.9239 15.214 14.1102 15.472 14.3746 15.784C14.645 16.096 14.9334 16.414 15.2459 16.732C15.5704 17.05 15.8828 17.344 16.2013 17.614C16.5138 17.878 16.7722 18.058 16.9765 18.166C17.0065 18.178 17.0426 18.196 17.0846 18.214C17.1327 18.232 17.1808 18.238 17.2349 18.238C17.337 18.238 17.4151 18.202 17.4812 18.136L17.9379 17.686C18.0881 17.536 18.2323 17.422 18.3706 17.35C18.5088 17.266 18.647 17.224 18.7972 17.224C18.9114 17.224 19.0315 17.248 19.1637 17.302C19.2959 17.356 19.4342 17.434 19.5844 17.536L21.5734 18.946C21.7296 19.054 21.8378 19.18 21.9039 19.33C21.9639 19.48 22 19.63 22 19.798Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-10 text-left  lg:grid-cols-3 lg:text-left">
            <div className="w-full order-3 lg:order-1">
              <strong class="text-whiteUi font-bold text-[20px]">
                Company Info
              </strong>

              <ul class="mt-6 space-y-1">
                <li>
                  <a
                    class="text-whiteUi transition hover:text-gray-700/75 font-light text-[16px]"
                    href="/"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    class="text-whiteUi transition hover:text-gray-700/75 font-light text-[16px]"
                    href="/"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    class="text-whiteUi transition hover:text-gray-700/75 font-light text-[16px]"
                    href="/"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full order-2 lg:order-2">
              <strong class="text-whiteUi font-bold text-[20px]">
                Book Now
              </strong>

              <ul class="mt-6 space-y-1">
                <li>
                  <a
                    class="text-whiteUi transition hover:text-gray-700/75 font-light text-[16px]"
                    href="/"
                  >
                    Appointment
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full order-1 lg:order-3">
              <strong class="text-whiteUi font-bold text-[20px]">
                Contact
              </strong>

              <ul class="mt-6 space-y-1">
                <li>
                  <a
                    class="text-whiteUi transition hover:text-gray-700/75 font-light text-[16px]"
                    href="/"
                  >
                    +1 123456789
                  </a>
                </li>

                <li>
                  <a
                    class="text-whiteUi transition hover:text-gray-700/75 font-light text-[16px]"
                    href="/"
                  >
                    remmcal@mail.com
                  </a>
                </li>

                <li>
                  <a
                    class="text-whiteUi transition hover:text-gray-700/75 font-light text-[16px]"
                    href="/"
                  >
                    Phone: +1 12345678
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-16 border-t border-gray-100 pt-8">
          <p class="text-center text-lg text-whiteUi text-t14">
            © Doctor all rights 2023 - Designed by remmcal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
