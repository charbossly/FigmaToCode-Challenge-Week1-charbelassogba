import React from "react";
import Semonia from "../../assets/images/Semiología.png";
import ciensas from "../../assets/images/Ciencias Básicas.png";
import medecin from "../../assets/images/medecin.png";
import healthy from "../../assets/images/healthy.png";
import adn from "../../assets/images/adn.png";
import ambulance from "../../assets/images/ambulance.png";
import whitePlus from "../../assets/images/white_plus.png";

function index(props) {
  const services = [
    {
      title: "General",
      description:
        "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
      image: Semonia,
    },
    {
      title: "Pediatrics",
      description:
        "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
      image: medecin,
    },
    {
      title: "Nutritional",
      description:
        "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
      image: adn,
    },
    {
      title: "Cardiology",
      description:
        "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
      image: healthy,
    },
    {
      title: "Ophthalmology",
      description:
        "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
      image: ciensas,
    },
    {
      title: "Orthopedics",
      description:
        "Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc",
      image: ambulance,
    },
  ];
  return (
    <section className="w-full bg-secondWhiteUi">
      <div className="max-w-screen-lg gap-6 mx-auto  p-16 px-4 rounded-xl grid grid-cols-12 justify-center items-center lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-0 block lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.375 5.25L8.625 12L15.375 18.75"
              stroke="#1678F2"
              stroke-width="3.02"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {services.map((service, index) => {
          return (
            <div
              key={index}
              data-aos={`${index % 2 == 0 ? "flip-left" : "flip-right"}`}
              className={` ${
                index > 0 ? "hidden " : "col-span-10"
              } bg-white p-4 lg:p-5  rounded-xl shadow-md lg:grid lg:col-auto lg:grid-cols-1`}
            >
              <img
                src={service.image}
                className="mx-auto"
                alt={service.title}
              />
              <h5 className="font-Poppins text-t24 font-normal my-2">
                {service.title}
              </h5>
              <p className="my-4 text-t14 text-skyBlueUi">
                {service.description}
              </p>
              <a
                data-aos="flip-down"
                className="flex shadow-sm w-[90%] mx-auto lg:w-full  p-4 py-2 gap-x-2 justify-center items-center text-white rounded-3xl hover:cursor-pointer bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6.9 20.6C8.4 21.5 10.2 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 13.8 2.5 15.5 3.3 17L2.44044 20.306C2.24572 21.0549 2.93892 21.7317 3.68299 21.5191L6.9 20.6Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 14.8485C16.5 15.0105 16.4639 15.177 16.3873 15.339C16.3107 15.501 16.2116 15.654 16.0809 15.798C15.86 16.041 15.6167 16.2165 15.3418 16.329C15.0714 16.4415 14.7784 16.5 14.4629 16.5C14.0033 16.5 13.512 16.392 12.9937 16.1715C12.4755 15.951 11.9572 15.654 11.4434 15.2805C10.9251 14.9025 10.4339 14.484 9.9652 14.0205C9.501 13.5525 9.08187 13.062 8.70781 12.549C8.33826 12.036 8.04081 11.523 7.82449 11.0145C7.60816 10.5015 7.5 10.011 7.5 9.543C7.5 9.237 7.55408 8.9445 7.66224 8.6745C7.77041 8.4 7.94166 8.148 8.18052 7.923C8.46895 7.6395 8.78443 7.5 9.11793 7.5C9.24412 7.5 9.37031 7.527 9.48297 7.581C9.60015 7.635 9.70381 7.716 9.78493 7.833L10.8305 9.3045C10.9116 9.417 10.9702 9.5205 11.0108 9.6195C11.0513 9.714 11.0739 9.8085 11.0739 9.894C11.0739 10.002 11.0423 10.11 10.9792 10.2135C10.9206 10.317 10.835 10.425 10.7268 10.533L10.3843 10.8885C10.3348 10.938 10.3122 10.9965 10.3122 11.0685C10.3122 11.1045 10.3167 11.136 10.3257 11.172C10.3393 11.208 10.3528 11.235 10.3618 11.262C10.4429 11.4105 10.5826 11.604 10.7809 11.838C10.9837 12.072 11.2 12.3105 11.4344 12.549C11.6778 12.7875 11.9121 13.008 12.151 13.2105C12.3853 13.4085 12.5791 13.5435 12.7323 13.6245C12.7549 13.6335 12.7819 13.647 12.8135 13.6605C12.8495 13.674 12.8856 13.6785 12.9261 13.6785C13.0028 13.6785 13.0613 13.6515 13.1109 13.602L13.4534 13.2645C13.5661 13.152 13.6743 13.0665 13.7779 13.0125C13.8816 12.9495 13.9852 12.918 14.0979 12.918C14.1835 12.918 14.2737 12.936 14.3728 12.9765C14.472 13.017 14.5756 13.0755 14.6883 13.152L16.18 14.2095C16.2972 14.2905 16.3783 14.385 16.4279 14.4975C16.473 14.61 16.5 14.7225 16.5 14.8485Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                </svg>{" "}
                <p className="text-t15 md:text-t18">{"Book an Appoinment"}</p>
              </a>
            </div>
          );
        })}
        <div className="col-span-1 lg:grid-col-0 block lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8.625 5.25L15.375 12L8.625 18.75"
              stroke="#1678F2"
              stroke-width="3.02"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default index;
