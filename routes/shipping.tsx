
import Footer from "../components/Footer.tsx";
import Navbar from "../islands/Navbar.tsx";

function shipping() {
  return (
    <div
      class="flex relative mx-auto w-[360px] flex-col sm:w-[1770px]  items-center"
   
    >
      <Navbar />
      <span class=" w-full">
        <p class="text-sm  text-gray-500">Home/Cart/Checkout</p>
        <h1 class="text-3xl font-bold">Checkout</h1>
       
      </span>


        <div class="w-full ">
    <h1 class="font-bold mt-5">Contact Information</h1>




<span class="flex justify-between">
<span>
  

<span class="sm:flex sm:w-[804px] sm:flex-wrap sm:gap-3">
<input
          placeholder="Name"
          style={"height:48px"}
          class="border w-full sm:w-[383px] mt-7  flex-row pl-4 pr-2  items-center rounded-3xl flex"
        />
            <input
          placeholder="Surname"
          style={"height:48px"}
          class="border w-full sm:w-[383px] mt-7  flex-row pl-4 pr-2  items-center rounded-3xl flex"
        />
            <input
          placeholder="Telephone"
          style={"height:48px"}
          class="border w-full sm:w-[383px] mt-7 sm:mt-4 flex-row pl-4 pr-2  items-center rounded-3xl flex"
        />
            <input
          placeholder="E-mail"
          style={"height:48px"}
          class="border w-full sm:w-[383px] mt-7 sm:mt-4 flex-row pl-4 pr-2  items-center rounded-3xl flex"
        />
</span>
   
   <span class="sm:w-[804px]">
<h1 class="font-bold mt-5">Shipping Address Details</h1>
<p class="mt-2 mb-2">Belarus, Minsk, st. Brilevskaya, d.2, apt. fifteen</p>
<a href="" class="text-gray-400 ">Change address</a>
<h1 class="font-bold mt-12">Payment Method</h1>


<span class="flex mt-8 justify-between sm:justify-start sm:gap-10 sm:w-[804px]">
    <span  style={"width:152px;height:48px"}
            class="border border-black flex-row pl-2 pr-2 justify-center items-center rounded-3xl flex"
        >
            Online Payment
        </span>

        <span  style={"width:152px;height:48px"}
            class="border border-gray-400 flex-row pl-2 pr-2 justify-center items-center rounded-3xl flex"
        > Upon Reciept</span>
</span>
</span>
</span>
<span class="hidden sm:w-[384px] sm:h-[320px] sm:p-4 sm:flex sm:flex-col bg-gray-100 ">
<h1 class="ml-4 mt-3 text-2xl font-bold">Order Of Price</h1>
<div class="grid grid-cols-2 hidden sm:grid bg-gray-100 p-4 mt-2">
        <div class=" flex flex-col">
          
          <p>Cost of the goods:</p>
          <p>Delivery:</p>
          <p>Discount Amount:</p>
        </div>

        <div class=" flex flex-col items-end justify-end">
        
          <p>159,98 BYN</p>
          <p>10 BYN</p>
          <p>0</p>
        </div>

      

      </div>

<hr />
<span class="flex ml-4 justify-between ">
<p class="font-bold"> The Total Amount <br /> Of The Order:</p>
<p class="  sm:font-bold">169.99 BYN</p>
</span>

<a href="/payment">
<div
       style={"height:48px"}
       class="border w-full hidden sm:flex mt-7 text-white bg-black flex-row pl-4 pr-2 justify-center items-center rounded-3xl flex ">
        Go To Payment
    
      </div>
      </a>
      </span>
  </span>




<div class="grid sm:hidden grid-cols-2 bg-gray-100 p-4 mt-8">
        <div style={"width:290px"} class=" ">
          <p class="font-bold"> The Total Amount Of The Order:</p>
          <p>Cost of the goods:</p>
          <p>Delivery:</p>
          <p>Discount Amount:</p>
        </div>

        <div class=" flex flex-col items-end justify-end">
          <p>169.99 BYN</p>
          <p>10 BYN</p>
          <p>0</p>
        </div>

      

      </div>
      <div
       style={"height:48px"}
       class="border sm:hidden w-full mt-7 text-white bg-black flex-row pl-4 pr-2 justify-center items-center rounded-3xl flex ">
        <a href="/payment">   Go To Payment</a>
    
      </div>

        </div>
<Footer/>

    </div>
  );
}

export default shipping;
