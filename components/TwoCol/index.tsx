import React from "react";

export default function index() {
  return (
    <div className="w-full h-auto flex-col md:h-[60vh] md:flex md:flex-row justify-center my-10 ">
      <div className="flex-col sm:flex sm:flex-row justify-between w-4/5 gap-10 mx-auto p-10 rounded-2xl shadow-lg">
        <div className="h-auto py-5 my-5 shadow-lg w-full md:w-1/2 flex flex-col items-center justify-evenly hover:bg-slate-200 rounded-2xl">
          <img src="favicon.ico" alt="" className="w-[10rem] h-[10rem]" />
          <p className="text-center font-semibold">BLOG</p>
        </div>

        <p
          className="px-5 py-10 my-5  text-black shadow-lg w-full h-auto md:w-1/2 flex items-center md:hover:bg-slate-50 rounded-2xl
         md:hover:relative lg:hover:bottom-5 md:hover:duration-500 md:hover:ease-linear  "
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi non
          necessitatibus labore dolorum cupiditate nobis eum, placeat itaque,
          velit sapiente numquam iusto laudantium libero aperiam iure voluptates
          quo. Beatae, temporibus.
        </p>
        {/* <div
          className="my-5  text-black shadow-lg w-full h-auto md:w-1/2 flex items-center md:hover:bg-slate-50 rounded-2xl
         md:hover:relative lg:hover:bottom-5 md:hover:duration-500 md:hover:ease-linear"
        >
        </div> */}
      </div>
    </div>
  );
}
