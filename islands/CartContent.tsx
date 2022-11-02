import { useEffect, useState } from "preact/hooks";

interface cartData {
  title: string;
  color: string;
  size: string;
  quantity: number;
}

function CartContent() {
  const [content, setContent] = useState<cartData[]>([
    {
      title: "",
      color: "",
      size: "",
      quantity: 0,
    },
  ]);

  useEffect(() => {
    let tempContent = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.includes("Fresh Project Manager")) {
        const stored = JSON.parse(localStorage.getItem(key)!);
        tempContent.push(stored);
      }
    }

    setContent(tempContent);
  }, []);

  return (
    <>
      <span>
        {content.length > 0 && content[0].title.length > 0 && (
          <>
            {content!.map((project) => {
              const Delete = () => {
                localStorage.removeItem(
                  `Fresh Project Manager: ${project.title}`
                );
            
              };

              return (
                <a
                  key={project.title}
                  href={`/cart`}
                  class="border rounded-md border-gray-300 hover:border-gray-400 py-3 px-5 transition cursor-pointer flex items-center justify-start"
                >
                  <div class="w-3/5">
                    <h1 class="font-bold">{project.title}</h1>
                    <p class="text-gray-500">{project.color}</p>
                    <p class="text-gray-500">{project.size}</p>
                    <p class="text-gray-500">{project.quantity}</p>
                  </div>
                  <div class="flex items-center justify-end w-2/5">
                    <button onClick={()=>Delete()}>Delete</button>
                  </div>
                </a>
              );
            })}
          </>
        )}
      </span>
      {!content[0].title.length && (
   
          <h1 class="my-6 w-full text-left m-0">No projects yet</h1>
       
      )}
    </>
  );
}

export default CartContent;
