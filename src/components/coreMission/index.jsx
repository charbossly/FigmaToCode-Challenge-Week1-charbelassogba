import React from "react";
import Video from "./video";
import Cards from "./cards";

function index(props) {
  return (
    <section className="py-32 bg-white">
      <h4 className="text-greenUi text-t16 lg:text-t22 text-center my-2 font-Poppins">
        Why Dr. Matthew Anderson?
      </h4>
      <Video />
      <h4 className="text-blackUi mx-10 lg:mx-0 my-2 text-center text-t24 lg:text-t32 font-Poppins font-semibold">
        A dedicated doctor with the core mission to help
      </h4>
      <p className="w-4/5  mb-4 mx-auto text-center text-blackUi lg:text-skyBlueUi text-t16 font-Poppins">
        orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh
        cursus at sed sagittis amet, sed.
        <br /> Tristique id nibh lobortis nunc elementum. Tellus quam mauris
        aenean turpis vulputate sodales nullam
        <br />
        lobortis. Vulputate tortor tincidun.
      </p>
      <Cards />
    </section>
  );
}

export default index;
