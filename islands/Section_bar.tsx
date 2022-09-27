import { useState } from "preact/hooks";

function Section_bar() {
  const [show, setShow] = useState(false);

  const showdrop = () => {
    setShow(!show);
  };

  return (
    <div class=" mx-auto flex-col w-[376px]   h-full mt-[60px] hidden sm:flex items-center">
      <span class="font-bold text-2xl">
        <div onClick={showdrop} class="font-bold flex select-none justify-between items-center text-2xl cursor-pointer">
          <span>Woman</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
</svg>

        </div>
        <span
          class={
            show
              ? "font-normal text-base  transition-all ease-in-out "
              : "transition-all ease-in-out  hidden overflow-hidden  "
          }
        >
          <p>See All</p>
          <p>New</p>
          <p>Bestsellers</p>
          <p>Clothing</p>
          <p>Outerwear</p>
          <p></p>
          <p></p>
        </span>
        <h1>Men</h1>
        
        <h1>Accessories</h1>
        <h1>Collections</h1>
        <h1>Stock</h1>
      </span>
    </div>
  );
}

export default Section_bar;
