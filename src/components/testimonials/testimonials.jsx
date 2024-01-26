import samy from "../../assets/images/samy.svg";
import amanda from "../../assets/images/amanda.svg";
import arthur from "../../assets/images/arthur.svg";
import kevin from "../../assets/images/kevin.svg";
import Testimonial from "./testimonial";

const testimonials = () => {
  const testimonialList = [
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      name: "Samy White",
      position: "Cardiology Patient",
      image: samy,
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      name: "Arthur Northon",
      position: "Nutrion Patient",
      image: arthur,
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      name: "Kevin Smith",
      position: "Orthopedics Patient",
      image: kevin,
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      name: "Amanda Jackson",
      position: "Ophthalmology Patient",
      image: amanda,
    },
  ];
  return (
    <section className="flex items-center">
      <div className="w-1/12 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
        >
          <g filter="url(#filter0_dd_10_7029)">
            <path
              d="M30.5 36L18.5 24L30.5 12"
              stroke="#031432"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_10_7029"
              x="-3.5"
              y="-3"
              width="56"
              height="56"
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
              <feMorphology
                radius="1"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_10_7029"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_10_7029"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_10_7029"
                result="effect2_dropShadow_10_7029"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_10_7029"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="w-10/12 grid grid-cols-2 grid-row-2 pb-24 gap-4 items-center">
        {testimonialList.map((testimonial, index) => {
          return <Testimonial test={testimonial} index={index} />;
        })}
      </div>
      <div className="w-1/12 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
        >
          <g filter="url(#filter0_dd_10_7031)">
            <path
              d="M18.5 36L30.5 24L18.5 12"
              stroke="#031432"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_10_7031"
              x="-3.5"
              y="-3"
              width="56"
              height="56"
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
              <feMorphology
                radius="1"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_10_7031"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_10_7031"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_10_7031"
                result="effect2_dropShadow_10_7031"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_10_7031"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default testimonials;
