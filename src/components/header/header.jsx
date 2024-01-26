import { useState } from "react";

export default () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "javascript:void(0)" },
    { title: "About", path: "javascript:void(0)" },
    { title: "Services", path: "javascript:void(0)" },
    { title: "Contact", path: "javascript:void(0)" },
  ];

  return (
    <nav
      className={`${
        state ? "bg-blueUi" : "bg-lightUi"
      } w-full border-b md:border-0 md:static'`}
    >
      <div className="items-center px-4 max-w-screen-lg mx-auto md:flex md:px-4">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div className={`relative pt-2 px-8 ${state ? "hidden" : "block "}`}>
            <a href="javascript:void(0)">
              <h4 className="text-[32px] text-doctorUigradient  font-bold">
                Doctor
              </h4>
              <svg
                className="absolute top-0 right-0"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 63 63"
                fill="none"
              >
                <g filter="url(#filter0_di_10_7192)">
                  <circle cx="31.5" cy="27.5002" r="12" fill="#5FD3BD" />
                </g>
                <rect
                  x="28.8913"
                  y="20.7178"
                  width="5.21739"
                  height="13.5652"
                  rx="0.782609"
                  fill="white"
                />
                <rect
                  x="38.2826"
                  y="24.8916"
                  width="5.21739"
                  height="13.5652"
                  rx="0.782609"
                  transform="rotate(90 38.2826 24.8916)"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_di_10_7192"
                    x="0.5"
                    y="0.500244"
                    width="62"
                    height="62"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="9.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0862745 0 0 0 0 0.470588 0 0 0 0 0.94902 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_10_7192"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_10_7192"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_10_7192"
                    />
                  </filter>
                </defs>
              </svg>
            </a>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none hover:outline-none focus:outline-none p-2 rounded-md"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 absolute top-10 right-3"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                >
                  <path
                    d="M18.2448 14.8979C18.63 14.8981 19.0003 15.0465 19.2791 15.3124C19.5579 15.5782 19.7238 15.9411 19.7423 16.3259C19.7608 16.7106 19.6306 17.0878 19.3786 17.3792C19.1266 17.6705 18.7722 17.8538 18.3888 17.8909L18.2448 17.8979H2.24475C1.85953 17.8978 1.48916 17.7494 1.21036 17.4835C0.931572 17.2177 0.765739 16.8548 0.747227 16.47C0.728714 16.0853 0.858943 15.7081 1.11093 15.4167C1.36291 15.1254 1.71733 14.9421 2.10075 14.9049L2.24475 14.8979H18.2448ZM18.2448 7.89795C18.6426 7.89795 19.0241 8.05598 19.3054 8.33729C19.5867 8.61859 19.7448 9.00012 19.7448 9.39795C19.7448 9.79577 19.5867 10.1773 19.3054 10.4586C19.0241 10.7399 18.6426 10.8979 18.2448 10.8979H2.24475C1.84693 10.8979 1.4654 10.7399 1.18409 10.4586C0.902786 10.1773 0.744751 9.79577 0.744751 9.39795C0.744751 9.00012 0.902786 8.61859 1.18409 8.33729C1.4654 8.05598 1.84693 7.89795 2.24475 7.89795H18.2448ZM18.2448 0.897949C18.6426 0.897949 19.0241 1.05598 19.3054 1.33729C19.5867 1.61859 19.7448 2.00012 19.7448 2.39795C19.7448 2.79577 19.5867 3.1773 19.3054 3.45861C19.0241 3.73991 18.6426 3.89795 18.2448 3.89795H2.24475C1.84693 3.89795 1.4654 3.73991 1.18409 3.45861C0.902786 3.1773 0.744751 2.79577 0.744751 2.39795C0.744751 2.00012 0.902786 1.61859 1.18409 1.33729C1.4654 1.05598 1.84693 0.897949 2.24475 0.897949H18.2448Z"
                    fill="#3A8EF6"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
            state ? "block text-center text-t37 bg-blueUi" : "hidden"
          }`}
        >
          <ul className="justify-center bg- items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className={`text-lightBlueUi hover:text-blueUi focus:text-blueUi ${
                    state ? "text-white" : ""
                  }`}
                >
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
          </ul>
          {state && (
            <div className="inline-block my-6">
              <a
                href="javascript:void(0)"
                className="flex items-center gap-x-2 py-2 px-12 lg:px-4 text-white bg-gradient-to-r bg-white rounded-3xl shadow"
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
                    stroke={`${state ? "blue" : "white"}`}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                <span className="text-t15 md:text-[18px] text-blueUi">
                  Book now
                </span>
              </a>
            </div>
          )}
        </div>
        <div className="hidden md:inline-block">
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
            <span className="text-[18px]">Book Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
