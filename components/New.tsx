import React from "react";

function New() {
  return (
    <div>
      <div id="new" style={"width:360px"} class=" mx-auto  ">
        <h1 class="mt-24 ml-16">New</h1>
        <span class="flex flex-wrap mt-8 gap-5 justify-center">
          <img
            src="/images/new-1.png"
            class="w-36 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:duration-100 hover:cursor-pointer "
            alt=""
          />
          <img
            src="/images/new-2.png"
            class="w-36 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:duration-100 hover:cursor-pointer"
            alt=""
          />
          <img
            src="/images/new-3.png"
            class="w-36 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:duration-100 hover:cursor-pointer"
            alt=""
          />
          <img
            src="/images/new-4.png"
            class="w-36 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:duration-100 hover:cursor-pointer"
            alt=""
          />
        </span>
    
        <span class="flex  mt-16   gap-5 justify-center">
          <button class="p-1 transition duration-200 pl-8 pr-8 border rounded-3xl border-black hover:bg-black hover:text-white">
            All New
          </button>
        </span>
      </div>
    </div>
  );
}

export default New;
