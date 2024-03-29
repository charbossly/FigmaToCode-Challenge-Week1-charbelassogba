import React from "react";
import plusSvg from "../../assets/plus.svg";

export default function index() {
  return (
    <div class="relative py-16 lg:py-32 max-w-screen-lg mx-auto w-full">
      <h4 className="text-greenUi text-t16 lg:text-t22 text-center my-2 font-Poppins">
        Book an apointement
      </h4>
      <div className="w-11/12 mx-auto lg:mx-0 lg:w-full p-2 lg:p-10 bg-gradient-to-br text-center from-blue-500 via-blue-700 to-blue-900 rounded-2xl">
        <h3 className="text-t32 text-white my-2">
          Schedule a virtual or presential appointment today
        </h3>
        <p className="w-[60%] text-t16 text-white mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          egestas viverra turpis habitant eu sociis fermentum felis.
        </p>
        <a
          data-aos="flip-down"
          className="flex shadow-sm w-[80%] lg:w-[30%] mx-auto my-8 p-4 py-3 gap-x-2 justify-center items-center  rounded-3xl hover:cursor-pointer bg-white text-blueUi"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M7.3162 20.6C8.8162 21.5 10.6162 22 12.4162 22C17.9162 22 22.4162 17.5 22.4162 12C22.4162 6.5 17.9162 2 12.4162 2C6.9162 2 2.4162 6.5 2.4162 12C2.4162 13.8 2.9162 15.5 3.7162 17L2.85664 20.306C2.66192 21.0549 3.35512 21.7317 4.09919 21.5191L7.3162 20.6Z"
              stroke="#3A8EF6"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.9162 14.8485C16.9162 15.0105 16.8801 15.177 16.8035 15.339C16.7269 15.501 16.6278 15.654 16.4971 15.798C16.2762 16.041 16.0329 16.2165 15.758 16.329C15.4876 16.4415 15.1946 16.5 14.8791 16.5C14.4195 16.5 13.9282 16.392 13.4099 16.1715C12.8917 15.951 12.3734 15.654 11.8596 15.2805C11.3413 14.9025 10.8501 14.484 10.3814 14.0205C9.9172 13.5525 9.49807 13.062 9.12401 12.549C8.75446 12.036 8.45701 11.523 8.24069 11.0145C8.02436 10.5015 7.9162 10.011 7.9162 9.543C7.9162 9.237 7.97028 8.9445 8.07844 8.6745C8.1866 8.4 8.35786 8.148 8.59672 7.923C8.88515 7.6395 9.20063 7.5 9.53413 7.5C9.66032 7.5 9.7865 7.527 9.89917 7.581C10.0163 7.635 10.12 7.716 10.2011 7.833L11.2467 9.3045C11.3278 9.417 11.3864 9.5205 11.427 9.6195C11.4675 9.714 11.4901 9.8085 11.4901 9.894C11.4901 10.002 11.4585 10.11 11.3954 10.2135C11.3368 10.317 11.2512 10.425 11.143 10.533L10.8005 10.8885C10.751 10.938 10.7284 10.9965 10.7284 11.0685C10.7284 11.1045 10.7329 11.136 10.7419 11.172C10.7555 11.208 10.769 11.235 10.778 11.262C10.8591 11.4105 10.9988 11.604 11.1971 11.838C11.3999 12.072 11.6162 12.3105 11.8506 12.549C12.094 12.7875 12.3283 13.008 12.5672 13.2105C12.8015 13.4085 12.9953 13.5435 13.1485 13.6245C13.1711 13.6335 13.1981 13.647 13.2297 13.6605C13.2657 13.674 13.3018 13.6785 13.3423 13.6785C13.419 13.6785 13.4775 13.6515 13.5271 13.602L13.8696 13.2645C13.9823 13.152 14.0905 13.0665 14.1941 13.0125C14.2978 12.9495 14.4014 12.918 14.5141 12.918C14.5997 12.918 14.6899 12.936 14.789 12.9765C14.8882 13.017 14.9918 13.0755 15.1045 13.152L16.5962 14.2095C16.7134 14.2905 16.7945 14.385 16.8441 14.4975C16.8892 14.61 16.9162 14.7225 16.9162 14.8485Z"
              stroke="#3A8EF6"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
          </svg>
          <p className="text-t15 md:text-t18">{"Book an Appoinment"}</p>
        </a>
      </div>
      <img
        alt="doctor_widget"
        src={plusSvg}
        className="absolute h-4 w-4 top-40 right-20"
      />
      <img
        alt="doctor_widget"
        src={plusSvg}
        className="absolute h-4 w-4 bottom-52 -left-8"
      />
      <img
        alt="doctor_widget"
        src={plusSvg}
        className="absolute h-4 w-4 top-56  -right-0 lg:-right-4"
      />
      <img
        alt="doctor_widget"
        src={plusSvg}
        className="absolute h-12 w-12 top-36 left-4"
      />
      <img
        alt="doctor_widget"
        src={plusSvg}
        className="absolute h-6 w-6 bottom-26 left-20"
      />
      <img
        alt="doctor_widget"
        src={plusSvg}
        className="absolute h-10 w-10 bottom-28 right-6"
      />
    </div>
  );
}
