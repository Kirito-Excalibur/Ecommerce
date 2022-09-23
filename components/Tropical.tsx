import React from 'react'
import { tropical_data } from './tropical_data.tsx'

function Tropical() {
  return (
    <div>
        <div id="tropical" style={"width: 360px"} class=" mx-auto  ">
        <h1 class="mt-24 font-bold text-2xl ml-10">Tropical</h1>
        <div class="mt-7 flex flex-wrap justify-center gap-4">
      {tropical_data.map((items,index)=>{
        return (
          <span class="flex flex-col items-center gap-y-4">
            <img
              src={items.image}
              alt=""
              class="rounded-full w-36 max-w-lg"
            />
            {items.name}
          </span>
        )
      })}
          
         
        </div>
      </div>
    </div>
  )
}

export default Tropical