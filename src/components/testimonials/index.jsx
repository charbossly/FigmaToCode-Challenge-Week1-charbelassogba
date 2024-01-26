import React from "react";
import Testimonial from "./testimonials";

function index(props) {
  return (
    <section className="bg-secondWhiteUi">
      <div className="max-w-screen-lg mx-auto text-center py-24 ">
        <h2 className="w-[65%] mx-auto text-t24 lg:text-t32 text-center my-4 text-blackUi font-semibold font-Poppins">
          What our great customers say about Dr. Matthew Anderson
        </h2>
        <p className="w-[65%] mx-auto text-lightBlueUi text-t16 text-center my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <Testimonial />
      </div>
    </section>
  );
}

export default index;
