

function Banner() {
  return (
    <div class=" pt-32 flex justify-center  w-[420px] sm:w-[1770px]  " >
      <div id="banner w-full" >
        <img
          src="/images/banner.png"
          alt=""         
          class="w-[1024px] h-[246px] sm:w-[1770px] sm:h-[599px]"
        />
        <img
          src="/images/banner-bg.png"
          alt=""
       
          class="absolute w-[138px] mt-[-246px] ml-[19px] sm:mt-[-670px] sm:ml-[330px]  sm:w-[384px]"
        />
        <div id="banner-msg"  class="mt-[-201px] ml-[154px] sm:mt-[-358px] sm:ml-[821px] absolute">
          <h1 style={"font-size:16px"}>Free Shipping On All Orders</h1>
          <h1 style={" font-size:40px;font-weight:700"} class="leading-10 mt-2">SPORT COLLECTION</h1>
          <button class="p-1 transition duration-200 pl-8 pr-8 mt-4 border rounded-3xl border-black hover:bg-black hover:text-white">
            WATCH
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
