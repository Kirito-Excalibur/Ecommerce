
import Footer from "../components/Footer.tsx";
import Navbar from "../islands/Navbar.tsx";

function shipping() {
  return (
    <div
      class="flex relative mx-auto flex-col  items-center"
      style="width:360px"
    >
      <Navbar />
      <span class=" w-full">
        <p class="text-sm  text-gray-500">Home/Cart/Checkout</p>
        <h1 class="text-3xl font-bold">Checkout</h1>
       
      </span>


        <div class="w-full">
    <h1 class="font-bold mt-5">Contact Information</h1>

    <input
          placeholder="Name"
          style={"height:48px"}
          class="border w-full mt-7  flex-row pl-4 pr-2  items-center rounded-3xl flex"
        />
            <input
          placeholder="Surname"
          style={"height:48px"}
          class="border w-full mt-7  flex-row pl-4 pr-2  items-center rounded-3xl flex"
        />
            <input
          placeholder="Telephone"
          style={"height:48px"}
          class="border w-full mt-7  flex-row pl-4 pr-2  items-center rounded-3xl flex"
        />
            <input
          placeholder="E-mail"
          style={"height:48px"}
          class="border w-full mt-7  flex-row pl-4 pr-2  items-center rounded-3xl flex"
        />
<h1 class="font-bold mt-5">Shipping Address Details</h1>
<p class="mt-2 mb-2">Belarus, Minsk, st. Brilevskaya, d.2, apt. fifteen</p>
<a href="" class="text-gray-400 ">Change address</a>
<h1 class="font-bold mt-12">Payment Method</h1>


<span class="flex mt-8 justify-between ">
    <span  style={"width:152px;height:48px"}
            class="border border-black flex-row pl-2 pr-2 justify-center items-center rounded-3xl flex"
        >
            Online Payment
        </span>

        <span  style={"width:152px;height:48px"}
            class="border border-gray-400 flex-row pl-2 pr-2 justify-center items-center rounded-3xl flex"
        > Upon Reciept</span>
</span>

<div class="grid grid-cols-2 bg-gray-100 p-4 mt-8">
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
       class="border w-full mt-7 text-white bg-black flex-row pl-4 pr-2 justify-center items-center rounded-3xl flex ">
        <a href="/payment">   Go To Payment</a>
    
      </div>

        </div>
<Footer/>

    </div>
  );
}

export default shipping;
