/** @jsx h */
import { useState } from "preact/hooks";
import { SliderData } from "./SliderData.tsx";
import { h } from "preact";
import {
  ChevronDoubleLeftSolid,
  ChevronDoubleRightSolid,
} from "preact-heroicons";
import { tw } from "twind";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <ChevronDoubleLeftSolid class="tw`w-4`" />
      <ChevronDoubleRightSolid class="tw`w-4`" />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel" class="tw`w-5`" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
