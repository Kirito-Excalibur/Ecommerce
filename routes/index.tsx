import ImageSlider from "../islands/ImageSlider.tsx";
import { SliderData } from "../components/SliderData.tsx";
import Navbar from "../islands/Navbar.tsx";
import Tropical from "../components/Tropical.tsx";
import Bestseller from "../components/Bestseller.tsx";
import NewCollections from "../components/NewCollections.tsx";
import New from "../components/New.tsx";
import Banner from "../components/Banner.tsx";
import Omix from "../components/omix.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  const A = "THERE ARE CLOTHES FOR EVERYONE";
  const B = "THERE WILL BE CLOTHES FOR EVERYONE";
  return (
    <body class="flex mx-auto w-full  select-none  flex-col ">
      <Navbar />
      <div class="sm:flex sm:gap-20">
        <span>
          <img
            src="/images/Index_scrn.png"
            alt=""
            class="w-full rounded-3xl sm:h-[809px] sm:w-[597px] sm:rounded-none sm:rounded-tr-[250px]"
          />
        </span>
        <span>
          <h1 class="text-[32px] sm:hidden">THERE ARE CLOTHES FOR EVERYONE</h1>
          <h1 class="text-[32px] hidden sm:block sm:font-bold sm:text-[100px]">
            THERE WILL BE <br /> CLOTHES <br /> FOR EVERYONE
          </h1>
          <h1 class=""></h1>
          <p class="mt-5 sm:text-[24px] sm:text-center">
            Pay for only what suits you
          </p>
          <span class="flex justify-center gap-6 sm:gap-36">
            <a
              href=""
              style={"height:48px"}
              class="border w-1/2 mt-7 bg-[#F6B750]   justify-center items-center rounded-3xl flex sm:w-1/4"
            >
              <span>For Men</span>
            </a>

            <a
              href=""
              style={"height:48px"}
              class="border w-1/2 mt-7 bg-[#F6B750] justify-center items-center rounded-3xl flex sm:w-1/4"
            >
              <span>For Women</span>
            </a>
          </span>
        </span>
      </div>
      <Tropical />
      <Bestseller />
      <NewCollections />
      <New />
      <Banner />
      <Omix />
      <hr />

      <Footer />
    </body>
  );
}
