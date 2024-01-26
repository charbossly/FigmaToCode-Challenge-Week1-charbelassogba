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
            className="mx-2 p-1 py-0 flex gap-x-1 justify-center items-center text-white rounded-2xl bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900"
          >
            <img className="w-6 h-6" src={card.image} alt={card.content} />
            <div className="mx-1 w-contain lg:text-left">
              <div>
                <p className="text-t15 md:text-t18">{card.content}</p>
                <p className="text-t12 md:text-t12 text-lightBlueUi">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default cards;
