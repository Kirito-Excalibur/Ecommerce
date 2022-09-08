/** @jsx h */
import { useState } from "preact/hooks";
import { SliderData } from "../components/SliderData.tsx";
import { h } from "preact";

export default function ImageSlider({slides}) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <button
        onClick={() => {
          current + 1;
        }}
      >
        Click me
      </button>
      {current}
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


