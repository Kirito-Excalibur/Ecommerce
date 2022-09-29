import WomenCloth from "../components/WomenCloth.tsx";
import Navbar from "../islands/Navbar.tsx";
import All_items from "../components/All_items.tsx";
import Footer from "../components/Footer.tsx";
import { All_items_data } from "../components/All_items_data.tsx";
import Section_bar from "../islands/Section_bar.tsx";
function catalogue() {
  return (
    <body class="flex relative mx-auto flex-col items-center w-[360px] sm:w-[1770px] ">
      <Navbar />
      <span class="w-full mx-auto sm:ml-[40rem] sm:w-[961px] ">
        <p class="text-sm  text-gray-500">Home/Women</p>
      </span>

      <span class="flex gap-20">
        <span class="hidden sm:block">
          <Section_bar />
        </span>
        <span>
          <WomenCloth />
          <All_items itemdata={All_items_data} title={"All Items"} />
        </span>
      </span>

      <Footer />
    </body>
  );
}

export default catalogue;
