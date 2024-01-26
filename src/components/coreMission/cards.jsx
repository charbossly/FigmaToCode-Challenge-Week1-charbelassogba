import React from "react";
import clock from "../../assets/images/clock.svg";
import checkCircle from "../../assets/images/check-circle.svg";
import MedicalSymbol from "../../assets/images/Medicalsymbol.svg";

function cards(props) {
  const cardList = [
    {
      content: "+15 years of experience",
      image: clock,
    },
    {
      content: "Urgent 24 hour service",
      image: checkCircle,
    },
    {
      content: "High quality care",
      image: MedicalSymbol,
    },
  ];
  return (
    <div className="flex  flex-col font-Poppins lg:flex-row items-center  lg:justify-center gap-y-2 lg:gap-y-0 lg:gap-x-6 mt-4">
      {cardList.map((card, index) => {
        return (
          <a
            data-aos="flip-down"
            key={index}
            className="p-2 px-3 lg:px-6 lg:py-2 flex gap-x-2 justify-center items-center text-white rounded-xl bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900"
          >
            <img src={card.image} alt={card.content} />
            <p className="text-t15 md:text-t18">{card.content}</p>
          </a>
        );
      })}
    </div>
  );
}

export default cards;
