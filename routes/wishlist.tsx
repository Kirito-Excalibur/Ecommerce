import React from "react";
import Footer from "../components/Footer.tsx";
import Navbar from "../islands/Navbar.tsx";

function wishlist() {
  return (
    <div class="flex relative mx-auto flex-col w-[360px] sm:w-[1770px]  items-center sm:items-start">
        <Navbar/>
        <Footer/>
    </div>
  );
}

export default wishlist;
