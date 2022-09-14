import React from "react";

function Bestseller() {
  return (
    <div>
      <div id="best-sellers" class=" mx-auto  " style={"width:360px"}>
        <h1 class="mt-24 ml-16">Best Sellers</h1>
        <span class="flex flex-wrap  mt-8 gap-5 justify-center">
          <img
            src="/images/bs1.png"
            class="w-36 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110  hover:duration-100 hover:cursor-pointer "
            alt=""
          />
          <img
            src="/images/bs2.png"
            class="w-36 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:duration-100 hover:cursor-pointer"
            alt=""
          />
          <img
            src="/images/bs3.png"
            class="w-36 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:duration-100 hover:cursor-pointer"
            alt=""
          />
          <img
            src="/images/bs4.png"
            class="w-36 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:duration-100 hover:cursor-pointer"
            alt=""
          />
        </span>
        <span class="flex  mt-16   gap-5 justify-center">
          <button class="p-1 pl-8 pr-8 border transition duration-200 rounded-3xl border-black hover:bg-black hover:text-white">
            All Best Hits
          </button>
        </span>
      </div>
    </div>
  );
}

export default Bestseller;
