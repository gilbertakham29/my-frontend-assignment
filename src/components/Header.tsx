"use client";
import React from "react";

function Header() {
  return (
    <header>
      <nav className="lg:w-full overflow-x-hidden bg-image-bg bg-no-repeat bg-center bg-cover lg:h-screen border-gray-200 px-8 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <span className="self-center text-white text-xl font-semibold whitespace-nowrap dark:text-white">
              DAMAC
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
