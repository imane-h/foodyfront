import { useState } from "react";
import logo from "../assets/google.png";
import tagine from "../assets/image.png";
import Modal from "@mui/material/Modal";

import Box from "@mui/material/Box";




export default function Login({show, onClose}) {
  console.log('show',show)
  console.log('close',onClose)
  

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",

    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    border: "px solid #000",
    boxShadow: 26,
    p: 2,
    boxRaduis: "20px",
  };
  console.log('gg')
  return (
    <div>
      
      <Modal open={show } onClose={onClose}>
        <Box sx={style}>
          <div className="flex space-x-14 ">
            <div className="grid justify-between">
              <div className="flex justify-between ">
                <h1 className="font-mono text-4xl font-black text-lime-600 ">
                  Foody
                </h1>
                <h6 className="text-m">Create an account</h6>
              </div>
              <div className=" mt-40 flex flex-col space-y-4 ">
                <p className="ml-5 pl-3 font-sans text-sm text-gray-600/50">
                  Welcome back! please use your email and password to login
                </p>

                <div>
  <h1 className="text-2xl ml-3 font-semibold">Email</h1>
  <input
    name="email"
    className="ml-5 pl-3 shadow-lg rounded-xl bg-neutral-100 w-full h-14"
    placeholder="Enter your email"
    onChange={handleChange}
  ></input>
</div>
<div>
  <h1 className="text-2xl ml-3 font-semibold">Password</h1>
  <input
    name="password"
    placeholder="Enter your password"
    className="ml-5 pl-3 shadow-lg rounded-xl bg-neutral-100 w-full h-14"
    onChange={handleChange}
  ></input>
</div>

<div className="flex ml-8 justify-between">
    <div className="flex">
        <input
            type="checkbox"
            className="mr-1.5 rounded border-transparent"
            id="remember"
            name="Remember for 14 days"
        />

        <label
            className="font-sans text-xs font-medium"
            htmlFor="remember"
        >
            Remember for 14 days
        </label>
    </div>

    <h6 className="pl-8 text-xs">Forgot password</h6>
</div>

                <div className="flex pt-10 ">
                  <button
                    className="rounded-full bg-lime-600	w-28 h-12 text-white"
                    onClick={handleClick}
                  >
                    Sign in
                  </button>
                  <img src={logo}></img>
                </div>
              </div>
            </div>

            <div
              className="bg-no-repeat bg-contain"

              style={{ backgroundImage: `url(${tagine})` }}
            >



              <div className=" justify-items-center pl-10 pt-60  space-y-4  text-center text-white  ">
                <h1 className="text-3xl	font-medium text-center">
                  Not a business owner ?
                </h1>
                <h6>Choose which type of user you are</h6>
                <div className="grid space-y-4 justify-items-center">
                  <button className="rounded-full bg-lime-600	w-60 h-12 text-white">
                    Client
                  </button>
                  <button className="rounded-full bg-lime-600	w-60 h-12 text-white">
                    Delivery Man
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
