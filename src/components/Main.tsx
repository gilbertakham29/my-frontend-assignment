import Image from "next/image";
import React from "react";

function Main() {
  return (
    <>
      <section className="flex flex-col justify-between items-center mt-16 mx-24">
        <div>
          <span className="text-center text-2xl font-sans text-blue-600">
            HARBOUR
          </span>
          <p className="text-center text-blue-600 text-2xl font-sans">LIGHTS</p>
          <p className="text-xs text-center font-mono text-blue-600">
            de GRISOGONO
          </p>
        </div>
        <div className="flex flex-col lg:w-auto w-64 justify-between items-center mt-8">
          <h4 className="text-center text-2xl text-blue-800 font-bold font-serif">
            FEATURES & AMENITIES
          </h4>
          <span className="text-center text-lg text-slate-600 font-normal">
            Harbour Lights beautifully honours maritime voyages while embracing
            an opulent seafront
            <br />
            lifestyle. Its maritime-inspired amenities provide an unmatched
            seaside experience, offering a <br />
            life of tranquility and bliss.
          </span>
        </div>
        <div className="grid lg:grid-cols-4 w-max lg:w-auto grid-cols-2 mt-8 lg:gap-8 gap-16">
          <div className="flex flex-col lg:justify-between justify-start items-center gap-2 lg:w-auto w-28 lg:px-8  lg:py-4 bg-white border  border-gray-100 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <Image
              src="/water-pool.png"
              className="rounded-full"
              width={150}
              height={150}
              alt="water"
            />
            <span className="text-center font-semibold text-blue-800">
              Floating <br /> Pools
            </span>
          </div>
          <div className="flex flex-col lg:justify-between justify-start w-28 items-center gap-2 lg:w-auto lg:px-8 lg:py-4 bg-white border shadow-xl border-gray-100   dark:bg-gray-800 dark:border-gray-700">
            <Image
              src="/room.png"
              className="rounded-full"
              width={150}
              height={150}
              alt="room"
            />
            <span className="text-center font-semibold text-blue-800">
              Spacious Cabins <br /> Like Rooms
            </span>
          </div>
          <div className="flex flex-col lg:justify-between justify-start w-28 items-center gap-2 lg:w-auto lg:px-8 lg:py-4 bg-white border border-gray-100  shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <Image
              src="/terrace.png"
              className="rounded-full"
              width={150}
              height={150}
              alt="terrace"
            />
            <span className="text-center font-semibold text-blue-800">
              Sea Facing <br /> Swimming Pools
            </span>
          </div>
          <div className="flex flex-col lg:justify-between justify-start w-28 items-center gap-2 lg:w-auto lg:px-8 lg:py-4 bg-white border border-gray-100  shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <Image
              src="/gym.png"
              className="rounded-full"
              width={150}
              height={150}
              alt="gym"
            />
            <span className="text-center font-semibold text-blue-800">
              Gymnasium <br /> & Fitness
            </span>
          </div>
        </div>
        <div className=" lg:ml-96 text-center flex flex-row lg:justify-end justify-center items-center lg:items-end mt-4">
          <span className="text-slate-400 font-normal lg:text-sm text-xs">
            *T&Cs apply | ** Based on similar branded projects in the last 2
            years. Source 1 | Source 2
          </span>
        </div>
      </section>
      <div className="flex flex-row  lg:justify-end justify-center lg:items-end items-center mx-auto lg:mx-64 mt-4">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 rounded-md focus:ring-blue-300 font-medium text-sm lg:px-12 px-8 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          EXTERIORS
        </button>
        <button
          type="button"
          className="py-2.5 lg:px-12 px-8 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-md bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          INTERIORS
        </button>
      </div>

      <section className=" flex flex-col justify-between items-center mt-8">
        <Image src="/flat.png" width={900} height={10} alt="flat" />
      </section>

      <div className="flex flex-row justify-center w-24 mx-36 items-center gap-4 lg:mx-auto mt-4">
        <Image
          src="/room_one.jpeg"
          alt="room_one"
          className="rounded-lg"
          width={200}
          height={100}
        />
        <Image
          src="/room_two.jpeg"
          alt="room_two"
          className="rounded-lg"
          width={200}
          height={100}
        />

        <Image
          src="/room_three.jpeg"
          alt="room_three"
          className="rounded-lg"
          width={200}
          height={100}
        />
        <Image
          src="/room_four.jpeg"
          alt="room_four"
          className="rounded-lg"
          width={200}
          height={100}
        />
      </div>
    </>
  );
}

export default Main;
