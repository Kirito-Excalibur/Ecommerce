/** @jsx h */
import { useState } from "preact/hooks";
import { SliderData } from "../components/SliderData.tsx";
import { h } from "preact";

import { Button } from "../components/Button.tsx";

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
      <Button onClick={nextSlide}>Click Me</Button>
      <button onClick={nextSlide}>Little me</button>
      {current}
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && <img src={slide.image} alt="travel" />}
          </div>
        );
      })}
    </div>
  );
}
