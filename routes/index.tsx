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
  return (
    
    <body
      class="flex relative  mx-auto flex-col items-center"
      style="width:360px"
    >
      <Navbar />
      <ImageSlider slides={SliderData} />
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
