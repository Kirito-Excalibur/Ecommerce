
import { All_items_data } from "./All_items_data.tsx";

function All_items({itemdata, title} ) {
  return (
    <div id="best-sellers" class=" mx-auto  " style={"width:360px"}>
      <h1 class=" mt-8 text-3xl font-bold">{title}</h1>
      <hr />

      <span class="flex flex-wrap  mt-8 gap-10 justify-center">
        {itemdata.map((item, index) => {
          return (
            <div class="flex flex-col gap-3">
              <a href={item.address}>
                <img
                  src={item.image}
                  class="w-36 rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110  hover:duration-100 hover:cursor-pointer "
                  alt=""
                />
              </a>
              <span class="pt-2">
                <p>{item.name}</p>
                <p class="font-bold">{item.price}</p>
                </span>
            </div>
          );
        })}
      </span>
      <span class="flex  mt-16   gap-5 justify-center">
        <button class="p-1 pl-8 pr-8 border transition duration-200 rounded-3xl border-black hover:bg-black hover:text-white">
          Next 12 Items
        </button>
      </span>
      
    </div>
  );
}

export default All_items;
