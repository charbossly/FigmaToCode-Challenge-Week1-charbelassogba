import React from "react";

function testimonial({ test, index }) {
  return (
    <div
      data-aos={`${index % 2 == 0 ? "flip-left" : "flip-right"}`}
      className={`${
        index > 0 ? "hidden" : "col-span-2 "
      } bg-white rounded-3xl shadow-lg p-6 lg:grid lg:col-auto lg:grid-cols-1`}
    >
      <h5 className="text-t16 italic text-left">{test.content}</h5>
      <div className="flex gap-x-2">
        <img src={test.image} alt="" />
        <div className="flex flex-col row-gap-4 text-left">
          <h5 className="text-greenUi text-t18">{test.name}</h5>
          <p className="text-lightBlueUi text-t12">{test.position}</p>
        </div>
      </div>
    </div>
  );
}

export default testimonial;
