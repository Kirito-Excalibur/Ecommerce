import { NewData } from "./NewData.tsx";
function New() {
  return (
    <div>
      <div id="new" class=" mx-auto  w-[360px] sm:w-full">
        <h1 class="mt-24 ml-10 text-2xl font-bold sm:ml-[13rem] ">New</h1>
        <span class="flex flex-wrap mt-8 gap-5 justify-center">
          <span class="flex flex-wrap justify-center gap-4">
            {NewData.slice(0, 4).map((item) => {
              return (
                <a href={item.address}>
                  {" "}
                  <img
                    class="w-36  sm:w-[280px] sm:h-[400px] rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:duration-100 hover:cursor-pointer "
                    src={item.image}
                    alt=""
                  />{" "}
                </a>
              );
            })}
          </span>

          <span class="hidden gap-4 sm:flex">
            {NewData.slice(4, 8).map((item) => {
              return (
                <a href={item.address}>
                  {" "}
                  <img
                    class="w-36  sm:w-[280px] sm:h-[400px] rounded-xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:duration-100 hover:cursor-pointer "
                    src={item.image}
                    alt=""
                  />{" "}
                </a>
              );
            })}
          </span>
        </span>

        <span class="flex  mt-16   gap-5 justify-center">
          <button class="p-1 transition duration-200 pl-8 pr-8 border rounded-3xl border-black hover:bg-black hover:text-white">
            All New
          </button>
        </span>
      </div>
    </div>
  );
}

export default New;
