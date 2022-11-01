import { useState } from 'preact/hooks'

import { All_items_data } from '../components/All_items_data.tsx'
import Counter from './Counter.tsx'

function CartContent() {
    const[present,setPresent]=useState(true)

    const Delete=()=>{
        setPresent(false)
    }

  return (
 
  <span>
    {present?(
              <div class="flex flex-col sm:flex-row sm:justify-between mt-8 sm:w-[800px]">
              <hr class="sm:hidden" />
              <span class="flex pt-4 gap-3 ">
                <img
                  style={"width:104px;height:135px"}
                  src={All_items_data[0].image}
                  alt=""
                />
                <span>
                  <h1 class="font-extrabold">Straight fit jeans in white</h1>
                  <h1 class="sm:mt-5">
                
                    <span class="font-bold ">Color:</span> White
                  </h1>
                  <h1>
                   
                    <span class="font-bold">Size:</span> XS
                  </h1>
                  <h1>
                
                    <span class="font-bold">Quantity:</span> 1{" "}
                  </h1>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 hover:cursor-pointer"
                  onClick={Delete}
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
      
              <span class="flex sm:flex-col-reverse justify-between mt-3 align-middle items-center">
                <span>
                  <Counter />
                </span>
                <span class="font-bold text-xl">79.99 USD</span>
              </span>
            </div>
       
    ):""}
    </span>
    

  
  )
}

export default CartContent