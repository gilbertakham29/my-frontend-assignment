"use client";
import React from "react";

function Header() {
  return (
    <header>
      <nav className="lg:w-full overflow-x-hidden bg-image-bg bg-no-repeat bg-center bg-cover lg:h-screen border-gray-200 px-8 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <span className="self-center text-white text-xl font-semibold whitespace-nowrap dark:text-white">
              <svg
                width="166"
                height="22"
                viewBox="0 0 166 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.0893 10.9004C33.4092 7.64807 33.2959 5.12089 31.7492 3.31525C30.2026 1.51679 27.2854 0.61038 22.9994 0.61038H8.48309L7.17183 3.86987H17.1667C22.2653 3.86987 23.7422 6.48499 21.9828 10.816C20.968 13.3217 20.0682 15.6263 17.9461 16.6511C16.0037 17.5917 13.9984 17.8663 10.4291 17.8663L5.80651 17.8573L9.25903 9.42499H4.90502L0 21.4291H13.1562C16.8441 21.4291 19.7561 21.0773 21.9043 20.3773C24.2566 19.6001 26.363 18.3222 28.2252 16.5452C29.9567 14.8509 31.2453 12.9717 32.0893 10.9004ZM122.816 0.588841L122.819 0.604995H117.429L96.7212 20.5514L104.815 0.608585H95.9382L85.2145 9.25628L79.694 13.9229H79.4429L82.041 7.12397L78.8744 0.608585H69.9571L61.8507 20.5891L57.1793 0.608585H47.4059L25.8224 21.4273H31.2174L36.7345 15.9835H50.3336L51.4164 21.4273H65.8664L71.0888 8.55987C71.3521 7.91371 71.6032 7.17064 71.8491 6.33961C71.8735 7.01089 72.0513 7.72525 72.3722 8.4773L76.9668 19.2106H77.7445L90.8885 8.51499C91.382 8.11294 92.1283 7.38781 93.1239 6.33961C92.6147 7.31064 92.259 8.04653 92.0515 8.55987L86.8292 21.4273H96.3689L96.3707 21.4219H106.428L111.884 15.9529H126.01L127.143 21.4219H132.108L127.269 0.587046H122.816V0.588841ZM39.5767 13.1278L48.1836 4.65423L49.7372 13.1278H39.5767ZM114.735 13.0973L123.572 4.24141L125.408 13.0973H114.735ZM165.843 0.570892H151.196C146.907 0.570892 143.252 1.4773 140.246 3.28115C137.236 5.08499 135.069 7.61935 133.747 10.8735C132.905 12.9411 132.666 14.8347 133.027 16.5201C133.454 18.3042 134.518 19.5858 136.244 20.3611C137.813 21.0576 140.451 21.4129 144.139 21.4129H157.269L158.582 18.1068H151.184C147.621 18.1068 145.245 17.6329 144.061 16.6888C142.769 15.6676 142.913 13.3019 143.921 10.7891C145.688 6.45089 149.376 3.74782 154.474 3.74782H160.207L158.893 7.01269H163.243L165.843 0.570892Z"
                  fill="#F5F5F5"
                />
              </svg>
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <div className="flex items-center lg:order-2">
              <svg
                className="w-6 h-6 text-white lg:hidden dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </div>
            <a
              href="#"
              className="text-white bg-primary-700 lg:flex hidden hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              <button
                type="button"
                className="text-blue-200 hover:text-white border border-blue-200 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                ENQUIRE NOW
              </button>
            </a>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-start mt-12 lg:mx-16">
          <div className="flex flex-col justify-between items-start">
            <h4 className="text-4xl text-white font-bold">
              HARBOUR LIGHTS
              <br /> DE <span className="text-blue-700"> GRESOGNO</span>
            </h4>
            <p className="text-2xl font-semibold text-white mt-4">
              1, 2, 3 Bedrooms Seaside Apartments
              <br />
              in Dubai Maritime City
            </p>
            <div className="mt-4">
              <section className="flex justify-between items-center px-4 py-2 border-l-4 rounded-lg border-blue-300 bg-blue-900">
                <h6 className="text-white text-sm">
                  Rental Returns of
                  <span className="mx-1 text-lg font-bold">UPTO 11%**</span>
                </h6>
              </section>
            </div>
            <div className="mt-4">
              <section className="flex justify-between items-center mb-5 px-4 py-2 border-l-4 rounded-lg border-blue-300 bg-blue-900">
                <h6 className="text-white text-sm">
                  Capital Appreciation of
                  <span className="mx-1 text-lg font-bold">UPTO 32%**</span>
                </h6>
              </section>
            </div>
          </div>

          <div className="px-8 flex flex-col justify-between items-start py-8 h-80 bg-opacity-30 backdrop-filter backdrop-blur-sm md:backdrop-blur-lg bg-gray-700 border border-gray-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col justify-between items-start">
              <a href="#">
                <h5 className="mb-2 text-sm font-normal tracking-tight text-white dark:text-white">
                  PRICING STARTS FROM
                </h5>
              </a>
              <p className=" font-bold text-4xl text-white dark:text-gray-400">
                $ 425, 000
              </p>
              <p className="mb-3 font-normal text-lg text-white dark:text-gray-400">
                AED $ 1.3 Million
              </p>
              <a
                href="#"
                className="inline-flex items-center w-full px-12 lg:px-20 lg:py-4 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                GET A PRESENTATION
              </a>
            </div>
            <div className="bg-opacity-30 backdrop-filter backdrop-blur-sm ">
              <span className="text-blue-400 text-md text-center">
                Get an Expert’s Presentation of Real
                <br />
                Estate in Dubai for Life and investment
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
