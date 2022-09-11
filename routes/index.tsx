/** @jsx h */
import {  h } from "preact";
import { tw } from "twind";
import ImageSlider from "../islands/ImageSlider.tsx";
import Slider from "react-slick"
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
        <span class={tw`flex justify-center`}>
  <Slider>
    
  </Slider>
        </span>
      </div>
    </div>
  );
}
