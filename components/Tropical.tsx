import React from "react";
import { tropical_data } from "./tropical_data.tsx";

function Tropical() {
  return (
    <div>
      <div id="tropical" class=" mx-auto w-[360px]  sm:w-full ">
        <h1 class="mt-24 ml-10 text-2xl font-bold sm:ml-[13rem]">Tropical</h1>
        <div class="mt-7 flex flex-wrap justify-center gap-4">
          {tropical_data.map((items, index) => {
            return (
              <span class="flex flex-col items-center gap-y-4">
                <a href={items.address}>
                  <img
                    src={items.image}
                    alt=""
                    class="rounded-full w-36 max-w-lg"
                  />
                </a>

                {items.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tropical;
