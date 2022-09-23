import React from 'react'

function NewCollections() {
  return (
    <div><div id="new-colletions" style={"width:360px"} class=" mx-auto ">
    <h1 class="mt-24 ml-10 text-2xl font-bold">New Collections</h1>
    <span class="flex flex-wrap  mt-8 gap-5 justify-center">
      <img
        src="/images/nc-1.png"
        style={"width:284px;height:284px"}
        class=" rounded-3xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:duration-100 hover:cursor-pointer "
        alt=""
      />
      <img
        src="/images/nc-2.png"
        style={"width:284px;height:284px"}
        class=" rounded-3xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:duration-100 hover:cursor-pointer"
        alt=""
      />
      <img
        src="/images/nc-3.png"
        style={"width:284px;height:284px"}
        class=" rounded-3xl transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:duration-100 hover:cursor-pointer"
        alt=""
      />
    </span>
    <span class="flex  mt-16   gap-5 justify-center">
          <button class="p-1 pl-8 pr-8 border transition duration-200 rounded-3xl border-black hover:bg-black hover:text-white">
            All Collections
          </button>
        </span>
  </div></div>
  )
}

export default NewCollections