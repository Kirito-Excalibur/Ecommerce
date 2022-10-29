import { tropical_data } from "./tropical_data.tsx";

function WomenCloth() {
  return (
    <div class="mx-auto w-[360px] flex flex-col justify-center sm:w-[961px]">
      <h1 class=" mt-8 sm:mt-0  text-2xl font-extrabold">Womens's Clothing</h1>
      <div class="mt-7 flex overflow-hidden sm:hidden    w-[360px]    gap-4">
        {tropical_data.map((items, index) => {
          return (
            <span class="flex flex-col  items-center gap-y-4">
              <a href={items.address}></a>
              <img
                src={items.image}
                alt=""
                class="rounded-full w-36 max-w-lg"
              />
              {items.name}
            </span>
          );
        })}
      </div>
      <div class="mt-7 mx-auto overflow-hidden hidden sm:flex  sm:overflow-auto w-[360px] sm:w-[961px] justify-between   gap-4">
        {tropical_data.slice(0, 4).map((items, index) => {
          return (
            <span class="flex flex-col  items-center gap-y-4">
              <a href={items.address}>
              <img
                src={items.image}
                alt=""
                class="rounded-full w-[176px] max-w-lg"
              />
              </a>
             
              {items.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default WomenCloth;
