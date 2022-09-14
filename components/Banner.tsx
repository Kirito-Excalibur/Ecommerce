import React from "react";

function Banner() {
  return (
    <div>
      <div id="banner" class=" pt-36 mx-auto  ">
        <img
          src="/images/banner.png"
          alt=""
         
          style={"width: 1024px;height:246px"}
        />
        <img
          src="/images/banner-bg.png"
          alt=""
          style={"margin:-246px 0 0 19px;width:138px"}
          class="absolute "
        />
        <div id="banner-msg" style={"margin:-184px 0 0 154px"} class="absolute" >
          <h1 style={"font-size:16px"}>Free Shipping On All Orders</h1>
          <h1 style={" font-size:30px;font-weight:700"}>SPORT COLLECTION</h1>
          <button class="p-1 transition duration-200 pl-8 pr-8 mt-4 border rounded-3xl border-black hover:bg-black hover:text-white">
            WATCH
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
