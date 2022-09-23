import { useState } from 'preact/hooks'


function Counter() {
    const[counter,setCounter]=useState(1)

    const decrement=()=>{
        if(counter!=0){
            setCounter(counter-1)
        }
    }

    const increment=()=>{
        setCounter(counter+1);
    }

  return (
    <div>
          
        <span
          style={"width:152px;height:48px"}
          class="border border-black flex-row pl-2 pr-2 justify-between items-center rounded-3xl flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 hover:cursor-pointer"
            onClick={decrement}
          >
            <path
              fill-rule="evenodd"
              d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
          <p class="select-none"> {counter}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 hover:cursor-pointer"
            onClick={increment}
          >
            <path
              fill-rule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
    
 
    </div>
  )
}

export default Counter