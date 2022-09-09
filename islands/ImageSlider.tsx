/** @jsx h */
import { useState } from "preact/hooks";
import { SliderData } from "../components/SliderData.tsx";
import { h } from "preact";
import { tw } from "twind";

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class={tw`w-9 rounded-3xl  absolute top-1/2 hover: cursor-pointer hover:bg-gray-300`}
        onClick={prevSlide}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class={tw`w-9 absolute rounded-3xl top-1/2 left-3/4 hover: cursor-pointer hover:bg-gray-300`}
        onClick={nextSlide}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
        />
      </svg>

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="travel"
                class={tw`border border-red-600`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
