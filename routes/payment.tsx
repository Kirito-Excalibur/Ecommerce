import React from "react";
import Footer from "../components/Footer.tsx";
import Navbar from "../islands/Navbar.tsx";

function payment() {
  return (
    <div
      class="flex relative mx-auto flex-col border items-center"
      style="width:360px"
    >
      <Navbar />
      <span class=" w-full">
        <p class="text-sm  text-gray-500">Home/Cart/Checkout/Payment</p>
        <h1 class="text-3xl font-bold">Order Payment</h1>
        <p class="text-gray-400 mb-4">
          All transactions are secure and <br /> ecrypted
        </p>
      </span>
      <img src="/images/card-front.svg"
        class="-translate-x-6 z-10"
        style={"width:266px"}
        alt=""
      />
      <img src="/images/card-back.svg"
        class=" translate-x-6 z-0"
        style={"width:266px;margin-top:-151px"}
        alt=""
      />
      <div class="w-full">
        <h1 class="font-bold mt-12">Credit Card</h1>
        <input
          placeholder="Card number"
          style={"height:48px"}
          class="border w-full mt-7  flex-row pl-4 pr-2  items-center rounded-3xl flex"
        />
        <input
          placeholder="Cardholder's name"
          style={"height:48px"}
          class="border w-full mt-3  flex-row pl-4 pr-2  items-center rounded-3xl flex"
        />

        <span class="flex gap-3">
      
            <input
          placeholder="12 "
          style={"height:48px"}
          class="border w-3/12  mt-3  flex-row pl-4 pr-2  items-center rounded-3xl flex"
        />


        
      
        <input
          placeholder="24"
          style={"height:48px"}
          class="border w-3/12  mt-3  flex-row pl-4 pr-2  items-center rounded-3xl flex"
        />
        <input
          placeholder="CVV"
          style={"height:48px"}
          class="border w-8/12 mt-3  flex-row pl-4 pr-2  items-center rounded-3xl flex"
        />

        </span>

        <span class="flex justify-between font-bold mt-6">
<h1> Amount Payable:</h1>
<h1>169.98 BYN</h1>
        </span>
        <div
       style={"height:48px"}
       class="border w-full mt-7 text-white bg-black flex-row pl-4 pr-2 justify-center items-center rounded-3xl flex ">
        <a href="">Pay</a>
    
      </div>

     <Footer/>
      </div>
    </div>
  );
}

export default payment;
