import Product from "../../../islands/Product.tsx";
import { PageProps } from "$fresh/server.ts";

import { NewData } from "../../../components/NewData.tsx";

function Al_4(props: PageProps) {
  const info = props.params.Al_4;

  console.log(info);
  return (
    <div>
      <Product data={NewData[info]} />
    </div>
  );
}

export default Al_4;
