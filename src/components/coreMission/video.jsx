import React from "react";
import videoImg from "../../assets/images/video.png";

function video(props) {
  return (
    <div
      data-aos="fade-right"
      className="flex relative justify-center items-center"
    >
      <img className="w-[75%] rounded-2xl" src={videoImg} alt="video demo" />
      <div className="absolute left-[50%] top-[50%] transform rounded-full p-4 transform -translate-x-1/2 -translate-y-1/2 bg-doctorUigradient flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[36px] h-[36px] lg:w-[64px] lg:h-[64px]"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.389 5.65948C13.2452 5.19204 14.2883 5.2294 15.1088 5.7569L52.4422 29.7569C53.2054 30.2476 53.6668 31.0927 53.6668 32C53.6668 32.9074 53.2054 33.7525 52.4422 34.2432L15.1088 58.2432C14.2883 58.7707 13.2452 58.8081 12.389 58.3406C11.5328 57.8732 11.0002 56.9755 11.0002 56V8.00004C11.0002 7.02456 11.5328 6.12692 12.389 5.65948ZM16.3335 12.8845V51.1156L46.0688 32L16.3335 12.8845Z"
            fill="#F9FBFC"
          />
        </svg>
      </div>
    </div>
  );
}

export default video;
