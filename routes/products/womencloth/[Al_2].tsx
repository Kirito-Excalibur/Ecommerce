import Product from "../../../islands/Product.tsx";
import { PageProps } from "$fresh/server.ts";
import { tropical_data } from "../../../components/tropical_data.tsx";


function Al_2(props: PageProps) {
 
  const info=props.params.Al_2

  console.log(info);
  return (
    <div>
   
      <Product data={tropical_data[info]} />
    </div>
  );
}

export default Al_2;
