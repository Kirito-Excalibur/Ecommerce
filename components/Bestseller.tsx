import { BestSellerData } from "./BestSellerData.tsx";
function Bestseller() {
  return (
    <div>
      <div id="best-sellers" class=" mx-auto w-[360px] sm:w-full ">
        <h1 class="mt-24 ml-10 text-2xl font-bold sm:ml-[13rem]">
          Best Sellers
        </h1>
        <span class="flex flex-wrap  mt-8 gap-5 justify-center">
          {BestSellerData.map((item, index) => {
            return (
              <a href={item.address}>
                <img
                  src={item.image}
                  class="w-36 rounded-xl transition ease-in-out sm:w-[280px] sm:h-[400px]  hover:-translate-y-1 hover:scale-110  hover:duration-100 hover:cursor-pointer "
                  alt=""
                />
              </a>
            );
          })}
        </span>
        <span class="flex  mt-16   gap-5 justify-center">
          <button class="p-1 pl-8 pr-8 border transition duration-200 rounded-3xl border-black hover:bg-black hover:text-white">
            All Best Hits
          </button>
        </span>
      </div>
    </div>
  );
}

export default Bestseller;
