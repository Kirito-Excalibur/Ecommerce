/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import ImageSlider from "../islands/ImageSlider.tsx";
import { SliderData } from "../components/SliderData.tsx";

export default function Home() {
  return (
    <div>
      <div
        class={tw` mx-auto border flex flex-col items-center  max-w-screen-lg`}
      >
        <div
          id="nav-1"
          style={"box-shadow: 0 0.5px 0 0 gray;"}
          class={tw` flex pt-2 pb-2  z-10`}
        >
          <ul class={tw`flex mt-1`}>
            <li
              class={tw`mr-10   font-semibold hover:border-b-4 border-pink-600`}
            >
              <a href="">Categories</a>
            </li>
            <li
              class={tw`mr-10   font-semibold hover:border-b-4 border-pink-600`}
            >
              <a href="">Brands</a>
            </li>
            <li
              class={tw`mr-5  font-semibold hover:border-b-4 border-pink-600`}
            >
              <a href="">Luxe</a>
            </li>
            <li
              class={tw` w-36 text-center font-semibold hover:border-b-4 border-pink-600`}
            >
              <a href=""> Simon Fashion</a>
            </li>
            <li
              class={tw`mr-10  w-32 text-center  font-semibold hover:border-b-4 border-pink-600`}
            >
              <a href=""> Beauty Advice</a>
            </li>
          </ul>

          <input
            class={tw`bg-gray-200 p-1 mr-10  `}
            type="text"
            name=""
            id="search"
          />

          <span class={tw`mt-1 flex text-center`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              style={"width:20px;height:26px"}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <a href="" class={tw` font-semibold`}>
              Account
            </a>
          </span>
        </div>
        <div
          id="nav-2"
          style={"box-shadow: 1 0.5px 2 2 black;"}
          class={tw`pb-5`}
        >
          <ul class={tw`flex space-x-4`}>
            <li class={tw``}>
              <a
                class={tw`font-semibold text-sm hover:border-b-4 border-pink-600 hover:text-pink-600`}
                href=""
              >
                Makeup
              </a>
            </li>
            <li class={tw``}>
              <a
                class={tw`font-semibold text-sm hover:border-b-4 border-pink-600 hover:text-pink-600`}
                href=""
              >
                Skin
              </a>
            </li>
            <li class={tw``}>
              <a
                class={tw`font-semibold text-sm hover:border-b-4 border-pink-600 hover:text-pink-600`}
                href=""
              >
                Hair
              </a>
            </li>
            <li class={tw``}>
              <a
                class={tw`font-semibold text-sm hover:border-b-4 border-pink-600 hover:text-pink-600`}
                href=""
              >
                Appliances
              </a>
            </li>
            <li class={tw``}>
              <a
                class={tw`font-semibold text-sm hover:border-b-4 border-pink-600 hover:text-pink-600`}
                href=""
              >
                Bath Body
              </a>
            </li>
            <li class={tw``}>
              <a
                class={tw`font-semibold text-sm hover:border-b-4 border-pink-600 hover:text-pink-600`}
                href=""
              >
                Natural
              </a>
            </li>
            <li class={tw``}>
              <a
                class={tw`font-semibold text-sm hover:border-b-4 border-pink-600 hover:text-pink-600`}
                href=""
              >
                Mom Baby
              </a>
            </li>
            <li class={tw``}>
              <a
                class={tw`font-semibold text-sm hover:border-b-4 border-pink-600 hover:text-pink-600`}
                href=""
              >
                Health and Wellness
              </a>
            </li>
            <li class={tw``}>
              <a
                class={tw`font-semibold text-sm hover:border-b-4 border-pink-600 hover:text-pink-600`}
                href=""
              >
                Men
              </a>
            </li>
            <li class={tw``}>
              <a
                class={tw`font-semibold text-sm hover:border-b-4 border-pink-600 hover:text-pink-600`}
                href=""
              >
                Fragnance
              </a>
            </li>
            <li class={tw``}>
              <a
                class={tw`font-semibold text-sm hover:border-b-4 border-pink-600 hover:text-pink-600`}
                href=""
              >
                Pop Ups
              </a>
            </li>
          </ul>
        </div>
        <div id="hero" class={tw`w`}>
          <ImageSlider slides={SliderData} />
        </div>
      </div>
      <div id="tropical" class={tw` mx-auto max-w-screen-lg poin border`}>
        <h1 class={tw`mt-10  ml-16`}>Tropical</h1>
        <div class={tw`mt-7 flex justify-center gap-4`}>
          <span class={tw`flex flex-col items-center gap-y-4`}>
            <img src="/images/1.png" alt="" class={tw`rounded-full w-36`} />
            Spring/Summer 2022
          </span>
          <span class={tw`flex flex-col items-center gap-y-4`}>
            <img src="/images/2.png" alt="" class={tw`rounded-full w-36`} />
            Choice Of Stylist
          </span>
          <span class={tw`flex flex-col items-center gap-y-4`}>
            <img src="/images/3.png" alt="" class={tw`rounded-full w-36`} />
            T-Shirts
          </span>
          <span class={tw`flex flex-col items-center gap-y-4`}>
            <img src="/images/4.png" alt="" class={tw`rounded-full w-36`} />
            Shirts
          </span>
          <span class={tw`flex flex-col items-center gap-y-4`}>
            <img src="/images/5.png" alt="" class={tw`rounded-full w-36`} />
            Dresses
          </span>
          <span class={tw`flex flex-col items-center gap-y-4`}>
            <img src="/images/6.png" alt="" class={tw`rounded-full w-36`} />
            Sale
          </span>
        </div>
      </div>
      <div id="best-sellers" class={tw` mx-auto max-w-screen-lg border`}>
        <h1 class={tw`mt-10 ml-16`}>Best Sellers</h1>
        <span class={tw`flex  mt-8 gap-5 justify-center`}>
          <img
            src="/images/bs1.png"
            class={tw`w-56 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer `}
            alt=""
          />
          <img
            src="/images/bs2.png"
            class={tw`w-56 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer`}
            alt=""
          />
          <img
            src="/images/bs3.png"
            class={tw`w-56 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer`}
            alt=""
          />
          <img
            src="/images/bs4.png"
            class={tw`w-56 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer`}
            alt=""
          />
        </span>
        <span class={tw`flex  mt-16   gap-5 justify-center`}>
          <button
            class={tw`p-1 pl-8 pr-8 border rounded-3xl border-black hover:bg-black hover:text-white`}
          >
            All Best Hits
          </button>
        </span>
      </div>

      <div id="new-colletions" class={tw` mx-auto max-w-screen-lg border`}>
        <h1 class={tw`mt-10 ml-16`}>New Collections</h1>
        <span class={tw`flex  mt-8 gap-5 justify-center`}>
          <img
            src="/images/nc-1.png"
            style={"width:284px;height:284px"}
            class={tw` rounded-3xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer `}
            alt=""
          />
          <img
            src="/images/nc-2.png"
            style={"width:284px;height:284px"}
            class={tw` rounded-3xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer`}
            alt=""
          />
          <img
            src="/images/nc-3.png"
            style={"width:284px;height:284px"}
            class={tw` rounded-3xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer`}
            alt=""
          />
        </span>
      </div>
      <div id="new" class={tw` mx-auto max-w-screen-lg border`}>
        <h1 class={tw`mt-10 ml-16`}>New</h1>
        <span class={tw`flex  mt-8 gap-5 justify-center`}>
          <img
            src="/images/new-1.png"
            class={tw`w-56 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer `}
            alt=""
          />
          <img
            src="/images/new-2.png"
            class={tw`w-56 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer`}
            alt=""
          />
          <img
            src="/images/new-3.png"
            class={tw`w-56 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer`}
            alt=""
          />
          <img
            src="/images/new-4.png"
            class={tw`w-56 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer`}
            alt=""
          />
        </span>
        <span class={tw`flex  mt-8 gap-5 justify-center`}>
          <img
            src="/images/new-5.png"
            class={tw`w-56 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer `}
            alt=""
          />
          <img
            src="/images/new-6.png"
            class={tw`w-56 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer`}
            alt=""
          />
          <img
            src="/images/new-7.png"
            class={tw`w-56 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer`}
            alt=""
          />
          <img
            src="/images/new-8.png"
            class={tw`w-56 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer`}
            alt=""
          />
        </span>
        <span class={tw`flex  mt-16   gap-5 justify-center`}>
          <button
            class={tw`p-1 pl-8 pr-8 border rounded-3xl border-black hover:bg-black hover:text-white`}
          >
            All New
          </button>
        </span>
      </div>
      <div id="banner" class={tw` pt-36 mx-auto max-w-screen-lg border`}>
        <img
          src="/images/banner.png"
          alt=""
          class={tw`absolute mx-auto max-w-screen-lg`}
        />
        <img
          src="/images/banner-bg.png"
          alt=""
          style={"margin:-70px 0 0 130px"}
          class={tw`absolute `}
        />
        <div
          id="banner-msg"
          style={"margin:150px 0 0 500px"}
          class={tw`absolute`}
        >
          <h1 style={"font-size:16px"}>Free Shipping On All Orders</h1>
          <h1 style={" font-size:40px;font-weight:700"}>SPORT COLLECTION</h1>
          <button
            class={tw`p-1 pl-8 pr-8 mt-4 border rounded-3xl border-black hover:bg-black hover:text-white`}
          >
            WATCH
          </button>
        </div>
      </div>
      <div
        id="omix"
        style={"margin-top:700px"}
        class={tw` mx-auto max-w-screen-lg border`}
      >
        <h1 class={tw`mt-10 ml-16`}>@Omix</h1>
        <span class={tw`flex  mt-8 gap-5 justify-center`}>
          <img
            src="/images/omix-1.png"
            style={"width:220px;height:220px"}
            class={tw` rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer `}
            alt=""
          />
          <img
            src="/images/omix-2.png"
            style={"width:220px;height:220px"}
            class={tw` rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer`}
            alt=""
          />
          <img
            src="/images/omix-3.png"
            style={"width:220px;height:220px"}
            class={tw` rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer`}
            alt=""
          />
          <img
            src="/images/omix-4.png"
            style={"width:220px;height:220px"}
            class={tw` rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer`}
            alt=""
          />
        </span>
        <span class={tw`flex  mt-8 gap-5 justify-center`}>
          <img
            src="/images/omix-5.png"
            style={"width:220px;height:220px"}
            class={tw` rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer `}
            alt=""
          />
          <img
            src="/images/omix-6.png"
            style={"width:220px;height:220px"}
            class={tw` rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer`}
            alt=""
          />
          <img
            src="/images/omix-7.png"
            style={"width:220px;height:220px"}
            class={tw` rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer`}
            alt=""
          />
          <img
            src="/images/omix-8.png"
            style={"width:220px;height:220px"}
            class={tw` rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover: duration-100 hover: cursor-pointer`}
            alt=""
          />
        </span>
      </div>
      <div id="footer" class={tw`mx-auto pt-36 max-w-screen-lg border`}>
        <div class={tw`flex justify-between border border-red-500`} id="footer-1">
          <div id="newsletter" class={tw`mt-10 ml-16`}>
            <h1>Subscribe to Newsletter</h1>
            <p>and get 10% off your first purchase!</p>
          </div>
          <form  action="">
            <input class={tw`mt-10 mr-16 border p-1 rounded-3xl pl-4 pr-16`} type="text" name="" placeholder="Enter your Email" id="" />
            <button class={tw`mt-10 mr-16 text-white bg-black border rounded-3xl p-2 pl-16 pr-16`}>Subscribe</button>
          </form>
        </div>

        <div id="footer-2" style={"background:#212429"} class={tw`mt-16 pt-14 grid grid-cols-4 text-white`}>
<div class={tw`flex border border-white flex-col items-center gap-10`} id="first"> 
<span class={tw`flex items-center gap-2`}><img src="/images/delivery.svg" class={tw`w-14`} alt="" /> Delivery</span>
<span class={tw`flex flex-col gap-3`}>
<h1>Buyers</h1>
<p>Payment</p>
<p>Personal Data Policy</p>
<p>Stock</p>
<p>Gift Certificates</p>
</span>
 </div>
<div class={tw`flex flex-col border border-white items-center gap-10`} id="second"><span class={tw`flex items-center gap-2`}>  <img src="/images/return.svg" class={tw`w-14`} alt="" /> Return</span>
<span class={tw`flex flex-col gap-3`}>
<p>Affiliate Programs</p>
<p>Rules for using promotional codes</p>
</span>
</div>
<div class={tw`flex flex-col border border-white items-center gap-10`} id="third"><span class={tw`flex items-center gap-2`}> <img src="/images/call.svg" class={tw`w-14`} alt="" /> Number</span> </div>
<div class={tw`flex flex-col border border-white items-center gap-10`} id="forth"><span class={tw`flex items-center gap-2`}> <img src="/images/mail.svg" class={tw`w-14`} alt="" /> Mail</span> </div>
        </div>
      </div>
    </div>
  );
}
