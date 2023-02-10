import Navbar from "../islands/Navbar.tsx";
import { All_items_data } from "../components/All_items_data.tsx";
import Counter from "../islands/Counter.tsx";
import Footer from "../components/Footer.tsx";
import CartContent from "../islands/CartContent.tsx";

function cart() {
  return (
    <div class="flex relative mx-auto flex-col w-[360px] sm:w-full  items-center sm:items-start">
      <span class=" w-full">
        <Navbar />
      </span>
      <span class=" w-full ">
        <p class="text-sm  text-gray-500">Home/Cart</p>
        <h1 class="text-3xl font-bold">Cart</h1>
        <p class="sm:hidden">You have 2 items in your cart</p>
      </span>
      <span class="sm:flex  sm:w-full sm:justify-end">
        <span class="w-full">
          <CartContent />
        </span>

        <span class="hidden sm:w-[384px] sm:p-4 sm:flex sm:flex-col bg-gray-100 ">
          <h1 class="text-3xl font-bold">Promo Code</h1>
          <input
            placeholder="Enter Promo Code"
            style={"height:48px"}
            class="border w-[336px] mt-7  flex-row pl-4 pr-2  items-center rounded-3xl flex"
          />
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
            <p class="font-bold">
              {" "}
              The Total Amount <br /> Of The Order:
            </p>
            <p class="  sm:font-bold">169.99 BYN</p>
          </span>

          <a href="/shipping">
            <div
              style={"height:48px"}
              class="border w-full hidden sm:flex mt-7 text-white bg-black flex-row pl-4 pr-2 justify-center items-center rounded-3xl flex "
            >
              Go To Checkout
            </div>
          </a>
        </span>
      </span>
      <div class="w-full sm:w-[800px] mt-20">
        <h1 class="text-3xl font-bold">Delivery</h1>

        <span class="flex sm:justify-start sm:gap-4 justify-between mt-8">
          <span
            style={"width:152px;height:48px"}
            class="border border-black flex-row pl-2 pr-2 justify-center items-center rounded-3xl flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>

            <p> By Courier</p>
          </span>
          <span
            style={"width:152px;height:48px"}
            class="border border-gray-200 flex-row pl-2 pr-2 justify-center items-center rounded-3xl flex"
          >
            By Mail
          </span>
        </span>

        <p class="font-bold mt-10 ">Where to deliver the order?</p>
        <p>Specify the address on the map or enter data.</p>
        <span class="flex mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p>Determine the location</p>
        </span>

        <input
          placeholder="Locality"
          style={"height:48px"}
          class="border w-full mt-7  flex-row pl-4 pr-2  items-center rounded-3xl flex"
        />

        <input
          placeholder="Outside"
          style={"height:48px"}
          class="border w-full mt-3  flex-row pl-4 pr-2  items-center rounded-3xl flex"
        />

        <span class="flex gap-3">
          <input
            placeholder="House"
            style={"height:48px"}
            class="border w-1/2 mt-7  flex-row pl-4 pr-2  items-center rounded-3xl flex"
          />

          <input
            placeholder="Flat"
            style={"height:48px"}
            class="border w-1/2 mt-7  flex-row pl-4 pr-2  items-center rounded-3xl flex"
          />
        </span>
      </div>
      <div class="grid grid-cols-2  sm:hidden bg-gray-100 p-4 mt-8">
        <div class=" ">
          <p class="font-bold"> The Total Amount Of The Order:</p>
          <p>Cost of the goods:</p>
          <p>Delivery:</p>
          <p>Discount Amount:</p>
        </div>

        <div class=" flex flex-col items-end justify-end">
          <p>169.99 BYN</p>
          <p>159,98 BYN</p>
          <p>10 BYN</p>
          <p>0</p>
        </div>
      </div>
      <a href="/shipping">
        <div
          style={"height:48px"}
          class="border w-[200px] sm:hidden mt-7 text-white bg-black flex-row pl-4 pr-2 justify-center items-center rounded-3xl flex "
        >
          Go To Checkout
        </div>
      </a>
      <span class="w-[420px] sm:w-full">
        <Footer />
      </span>
    </div>
  );
}

export default cart;
