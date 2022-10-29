import Product from "../../../islands/Product.tsx";
import { PageProps } from "$fresh/server.ts";
import { BestSellerData } from "../../../components/BestSellerData.tsx";

function Al_3(props: PageProps) {
  const info = props.params.Al_3;

  console.log(info);
  return (
    <div>
      <Product data={BestSellerData[info]} />
    </div>
  );
}

export default Al_3;
