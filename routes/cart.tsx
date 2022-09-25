
import Navbar from "../islands/Navbar.tsx";
import { All_items_data } from "../components/All_items_data.tsx";
import Counter from "../islands/Counter.tsx";
import Footer from "../components/Footer.tsx";
function cart() {
  return (
    <div
      class="flex relative mx-auto flex-col  items-center"
      style="width:360px"
    >
      <Navbar />
      <span class=" w-full">
        <p class="text-sm  text-gray-500">Home/Cart</p>
        <h1 class="text-3xl font-bold">Cart</h1>
        <p>You have 2 items in your cart</p>
      </span>

      <div class="flex flex-col mt-8 ">
        <hr />
        <span class="flex pt-4 gap-3 ">
          <img
            style={"width:104px;height:135px"}
            src={All_items_data[0].image}
            alt=""
          />
          <span>
            <h1 class="font-extrabold">Straight fit jeans in white</h1>
            <h1>
              {" "}
              <span class="font-bold">Color:</span> White
            </h1>
            <h1>
              {" "}
              <span class="font-bold">Size:</span> XS
            </h1>
            <h1>
              {" "}
              <span class="font-bold">Quantity:</span> 1{" "}
            </h1>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 hover:cursor-pointer"
          >
            <path
              fill-rule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
              clip-rule="evenodd"
            />
          </svg>
        </span>

        <span class="flex justify-between mt-3 align-middle items-center">
          <span>
            <Counter />
          </span>
          <span class="font-bold text-xl">79.99 USD</span>
        </span>
      </div>
      <div class="flex flex-col mt-8 ">
        <hr />
        <span class="flex pt-4 gap-3 ">
          <img
            style={"width:104px;height:135px"}
            src={All_items_data[1].image}
            alt=""
          />
          <span>
            <h1 class="font-extrabold">Straight fit jeans in white</h1>
            <h1>
              {" "}
              <span class="font-bold">Color:</span> Flowers
            </h1>
            <h1>
              {" "}
              <span class="font-bold">Size:</span> XS
            </h1>
            <h1>
              {" "}
              <span class="font-bold">Quantity:</span> 1{" "}
            </h1>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 hover:cursor-pointer"
          >
            <path
              fill-rule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
              clip-rule="evenodd"
            />
          </svg>
        </span>

        <span class="flex justify-between mt-3 align-middle items-center">
          <span>
            <Counter />
          </span>
          <span class="font-bold text-xl">79.99 USD</span>
        </span>
      </div>

      <div class="w-full mt-20">
        <h1 class="text-3xl font-bold">Delivery</h1>

        <span class="flex justify-between mt-8">
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
        <a href="/shipping">   Go To Checkout</a>
    
      </div>

      <Footer/>
    </div>
  );
}

export default cart;
