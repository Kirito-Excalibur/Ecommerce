
import { tropical_data } from './tropical_data.tsx'

function WomenCloth() {
  return (
    <div class='mx-auto' style={"width:360px"}>
      
    <h1 class=" mt-8 text-2xl font-extrabold">Womens's Clothing</h1>
    <div style={"width:360px"} class="mt-7 flex overflow-hidden  gap-4">
      {tropical_data.map((items,index)=>{
        return (
          <span class="flex flex-col  items-center gap-y-4">
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
  )
}

export default WomenCloth