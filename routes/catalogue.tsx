import React from "react";

import WomenCloth from "../components/WomenCloth.tsx";
import Navbar from "../islands/Navbar.tsx";
import All_items from "../components/All_items.tsx";
import Footer from "../components/Footer.tsx";
import { All_items_data } from "../components/All_items_data.tsx";
function catalogue() {
  return (
    <body
      class="flex relative mx-auto flex-col  items-center"
      style="width:360px"
    >
      <Navbar />
      <span class=" w-full">
        <p class="text-sm  text-gray-500">Home/Women</p>
      </span>
      <WomenCloth />

      <All_items itemdata={All_items_data} title={"All Items"} />
      <Footer />
    </body>
  );
}

export default catalogue;
