import React from "react";

export default function index() {
  let a = ["Blog", "Shopping", "Contact"];
  return (
    <div className="w-full h-auto lg:h-[60vh] justify-center mt-10 mb-28 py-5  ">
      <div
        className="w-full h-auto lg:w-11/12 lg:mx-auto grid-cols-1  sm:mx-2 sm:px-5 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-20 py-5 
      place-items-center justify-items-center shadow-lg rounded-lg md:border md:border-t-4 md:border-r-4 md:border-l-4"
      >
        {a.map((x) => (
          <div
            key={x}
            className="h-auto lg:h-auto xl:h-[45vh] w-full  flex flex-col items-center justify-evenly shadow-lg rounded-lg 
            md:hover:border md:hover:border-t-4 md:hover:border-l-4 my-5  "
          >
            <h5 className="font-extrabold ">{x}</h5>
            <img src="favicon.ico" alt="" className="w-[10rem] h-[10rem] " />
            <p className="">Lorem ipsum dolor sit amet.</p>
            <p className="mx-5 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, pariatur.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
