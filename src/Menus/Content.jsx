import React, { useEffect, useState } from "react";
import Card from "../assets/image.png";
import fetchDataMenus from '../Api/userApi'

export default function Content() {
  const [menus, setMenus] = useState([{}]);
  useEffect(()=>{
    fetchDataMenus()
    .then((response)=>{
      if (!Array.isArray(response.data)) {
        console.warn("Fetched menu data is not an array"); // Use console.warn for non-critical errors
      } else {
        setMenus(response.data);
        console.log(menus);
      }
    })
    .catch((error)=>{
      console.log(error)
      })
    },[menus])
  return (
    <>
      <div className="flex  justify-center space-x-12 	mt-20 ">
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          All Meals
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 me-2 mb-2 border border-gray-400 rounded-full shadow ">
          Appetizers
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-6 border me-2 mb-2 border-gray-400 rounded-full shadow">
          Tajines
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-6 me-2 mb-2 border border-gray-400 rounded-full shadow">
          Couscous
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-6 me-2 mb-2 border border-gray-400 rounded-full shadow">
          Bastilla
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 me-2 mb-2 border border-gray-400 rounded-full shadow">
          Pasta
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 me-2 mb-2 border border-gray-400 rounded-full shadow">
          Pizza
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 me-2 mb-2 border border-gray-400 rounded-full shadow">
          Pizza
        </button>
      </div>
      <div className="mt-20 ml-20 mr-20">
        <form>
          <div className="flex">
            <label
              htmlFor="search-dropdown"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              type="button"
            >
              All Meals
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Shopping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Images
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Finance
                  </a>
                </li>
              </ul>
            </div>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-gray-700 rounded-e-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-3 justify-items-center gap-6 mt-20 ">
        { menus.map((menu)=>(
          <div key={menu._id} className="max-w-sm rounded overflow-hidden shadow-2xl">
          <img className="w-full" src={menu.image} alt=""></img>
          <div className=" text-left	px-6 py-4">
            <div className="font-bold text-xl mb-2 ">{menu.name}</div>
            <p className="text-gray-700 text-base">
              {menu.description}
            </p>
            <div className="text-lime-600 text-lg pt-4 font-bold">
              {menu.price} MAD
            </div>
          </div>
        </div>
        ))
          
        }
      </div>
    </>
  );
}
