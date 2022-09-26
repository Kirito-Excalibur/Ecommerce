function Footer() {
  return (
    <div>
      <div id="footer" class="mx-auto  w-[420px]  pt-36 sm:w-[1770px] ">
        <hr />
        <div class="flex flex-wrap  justify-center sm:gap-[64vh]" id="footer-1">
          <div id="newsletter" class="mt-10 ml-4">
            <h1>Subscribe to Newsletter</h1>
            <p>and get 10% off your first purchase!</p>
          </div>
          <form action="">
            <input
              class="mt-10 ml-4 border p-1 rounded-3xl pl-4 pr-16"
              type="text"
              name=""
              placeholder="Enter your Email"
              id=""
            />
            <button class="mt-4 ml-4 text-white bg-black  rounded-3xl p-2 pl-16 pr-16">
              Subscribe
            </button>
          </form>
        </div>

        <div
          id="footer-2"
          style={"background:#212429"}
          class="mt-16 flex flex-col sm:flex-row sm:justify-center sm:gap-[20vh] gap-4 pt-5 pb-6  text-white"
        >
          <div class="flex sm:mt-10 items-center " id="first">
            <span class="flex ml-2 gap-2 justify-center items-center">
              <img src="/images/delivery.svg" class="w-10 sm:w-[56px]" alt="" />
              <h1>Delivery</h1>
            </span>
          </div>
          <div class="flex sm:mt-10  items-center " id="second">
            <span class="flex ml-2 gap-2 justify-center items-center">
              <img src="/images/return.svg" class="w-10 sm:w-[56px]" alt="" />{" "}
              Return
            </span>
          </div>
          <div class="flex sm:mt-10 items-center " id="third">
            <span class="flex ml-2 gap-2 justify-center items-center">
              <img src="/images/call.svg" class="w-10 sm:w-[56px]" alt="" />{" "}
              Number
            </span>
          </div>
          <div class="flex sm:mt-10 items-center " id="forth">
            <span class="flex ml-2 gap-2 justify-center items-center">
              <img src="/images/mail.svg" class="w-10 sm:w-[56px]" alt="" />
              <h1>Mail</h1>
            </span>
          </div>
        </div>

        <div
          style={"background:#212429"}
          class="text-white sm:flex sm:justify-center sm:gap-[20vh] pb-[2rem]"
        >
          <div class="flex sm:flex-col  sm:gap-9 text-white border border-white sm:border-0 p-3">
            <h1 class="sm:text-[20px] sm:font-bold">Buyers</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 sm:hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <span class="hidden sm:block leading-loose">
              <p>Payment</p>
              <p>Personal Data Policy</p>
              <p>Stock</p>
              <p>Gift Certificates</p>
            </span>
          </div>

          <div class="flex sm:flex-col sm:gap-9 text-white border border-white sm:border-0 p-3">  
            <h1 class="sm:text-[20px] sm:font-bold">About Company</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 sm:hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <span class="hidden sm:block sm:leading-loose">
              <p>
                {" "}
                <a href="">About Us</a>{" "}
              </p>
              <p>
                {" "}
                <a href=""> Contacts</a>{" "}
              </p>
              <p>
                {" "}
                <a href="">News</a>{" "}
              </p>
              <p>
                {" "}
                <a href=""> Jobs</a>{" "}
              </p>
            </span>
          </div>

          <span class="sm:flex sm:flex-col">
            <h1 class=" ml-3 mt-3 sm:text-[20px] sm:font-bold">
              Our Social Networks
            </h1>
            <div class="flex sm:flex-row justify-center gap-12 mt-4">
              <a href="https://www.facebook.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              </a>
             <a href="https://www.youtube.com">
             <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-youtube"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
             </a>
             
            <a href="https://www.instagram.com">
  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              </a>
              

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-twitter"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </div>
          </span>
          <span class="mt-10 sm:hidden text-gray-500">
            <p class="ml-3 mt-10">
              Limited Liability Company "Omix Store", legal address: 220020,
              Minsk, Pobediteley Ave., 100, of. 203
            </p>
            <p class="ml-3 mt-4">
              In the commercial register since June 23, 2010, registration
              number 256476, UNP 14886482
            </p>

            <p class="ml-3 mt-4">© 2020-2022 «Omix Store».</p>

            <p class="ml-3 mt-4">All rights reserved.</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
