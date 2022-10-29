import Product from "../../../islands/Product.tsx";
import { PageProps } from "$fresh/server.ts";
import { All_items_data } from "../../../components/All_items_data.tsx";

function Al_1(props: PageProps) {
 
  const info=props.params.Al_1

  console.log(info);
  return (
    <div>
   
      <Product data={All_items_data[info]} />
    </div>
  );
}

export default Al_1;
