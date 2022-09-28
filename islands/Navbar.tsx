import { useState } from "preact/hooks";
import { SidebarData } from "../components/Sidebar.tsx";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div style={""}>
      <div class="flex justify-between h-[86px] w-[360px]   mx-auto sm:w-[1770px]">
        <span class=" mt-6 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 hover:cursor-pointer"
            onClick={showSidebar}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>

        <ul
          class={
            sidebar
              ? "fixed z-30 flex flex-col left-0 bg-pink-500 pt-10 transition-all ease-in rounded-tr-lg h-full"
              : " fixed z-30 flex flex-col  -left-48 bg-pink-500 pt-10 transition-all ease-in rounded-tr-lg h-full"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="inline-block  w-10 h-10 hover:cursor-pointer"
            onClick={showSidebar}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <li class="text-2xl mt-10  gap-5">
            {SidebarData.map((item, index) => {
              return (
                <a href={item.path}>
                  <li key={index} class={item.cname}>
                    <span class="  text-center p-4  w-full block transition ease-in-out  hover:bg-gray-500 hover:duration-500">
                      {item.title}
                    </span>
                  </li>
                </a>
              );
            })}
          </li>
        </ul>

        <ul class="flex gap-60  items-center ">
          <li class="hidden hover:border-b-4 hover:border-black sm:block">
            {" "}
            <a href=""> Women</a>
          </li>
          <li class="hidden hover:border-b-4 hover:border-black sm:block">
            {" "}
            <a href="">Men</a>{" "}
          </li>
          <li class="hidden hover:border-b-4 hover:border-black sm:block">
            {" "}
            <a href="">New</a>{" "}
          </li>
          <li class="hidden hover:border-b-4 hover:border-black sm:block">
            {" "}
            <a href=""> Special Collections</a>
          </li>
        </ul>

        <span class="flex gap-3 mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <a href="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </a>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
