import React from "react";

function Footer() {
  return (
    <div>
      <div id="footer" style={"width:360px"} class="mx-auto pt-36  ">
        <hr />
        <div class="flex flex-wrap " id="footer-1">
          <div id="newsletter" class="mt-10 ml-4">
            <h1>Subscribe to Newsletter</h1>
            <p>and get 10% off your first purchase!</p>
          </div>
          <form action="">
            <input
              class="mt-10 ml-4 border p-1 rounded-3xl pl-4 pr-16"
              type="text"
              name=""
              placeholder="Enter your Email"
              id=""
            />
            <button class="mt-4 ml-4 text-white bg-black  rounded-3xl p-2 pl-16 pr-16">
              Subscribe
            </button>
          </form>
        </div>

        <div
          id="footer-2"
          style={"background:#212429"}
          class="mt-16 flex flex-col gap-4 pt-5 pb-6  text-white"
        >
          <div class="flex  items-center " id="first">
            <span class="flex ml-2 gap-2 justify-center items-center">
              <img src="/images/delivery.svg" class="w-10" alt="" />
             <h1>Delivery</h1>
            </span>
          </div>
          <div class="flex   items-center " id="second">
            <span class="flex ml-2 gap-2 justify-center items-center">
              <img src="/images/return.svg" class="w-10" alt="" /> Return
            </span>
          </div>
          <div class="flex items-center " id="third">
            <span class="flex ml-2 gap-2 justify-center items-center">
              <img src="/images/call.svg" class="w-10" alt="" /> Number
            </span>
          </div>
          <div class="flex  items-center " id="forth">
            <span class="flex ml-2 gap-2 justify-center items-center">
              <img src="/images/mail.svg" class="w-10" alt="" /> 
             <h1>Mail</h1> 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
