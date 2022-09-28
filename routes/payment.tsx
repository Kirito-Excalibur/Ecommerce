
import Footer from "../components/Footer.tsx";
import Navbar from "../islands/Navbar.tsx";

function payment() {
  return (
    <div
      class="flex relative mx-auto flex-col w-[360px] justify-center sm:w-[1770px] items-center"
   
    >
      <Navbar />
      <span class=" w-full">
        <p class="text-sm text-gray-500">Home/Cart/Checkout/Payment</p>
        <h1 class="text-3xl font-bold">Order Payment</h1>
        <p class="text-gray-400 mb-4">
          All transactions are secure and <br /> ecrypted
        </p>
      </span>
      <span class="sm:flex sm:items-center sm:justify-center sm:gap-[300px]">  
        <span class="flex items-center justify-center flex-col mt-10">
      <img
        src="/images/card-back.svg"
        class=" translate-x-6 w-[266px] sm:w-[506px] z-0  "
   
        alt=""
      />
      <img
        src="/images/card-front.svg"
        class="-translate-x-6 z-10 -mt-[241px]  sm:w-[506px]  w-[266px]"
    
        alt=""
      />
    
      </span>
      <div class="w-full  sm:w-[385px]">
        <h1 class="font-bold sm:mt-12 mt-[130px]">Credit Card</h1>
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
        <a href="">
        <div
          style={"height:48px"}
          class="border w-full mt-7 text-white bg-black flex-row pl-4 pr-2 justify-center items-center rounded-3xl flex "
        >
        Pay
        </div>
        </a>
       
      </div>
  </span>
    
      <Footer />
    </div>
  );
}

export default payment;
