import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {

  // const [mode, setMode] = useState("light");

  // function themeChange() {
  //   const html = document.documentElement;
  //   if (mode == "light") {
  //     html.classList.remove("light")
  //     html.classList.add("dark")
  //     setMode("dark")
  //     localStorage.setItem("mode", "dark")
  //   } else {
  //     html.classList.remove("dark")
  //     html.classList.add("light")
  //     setMode("light")
  //     localStorage.setItem("mode", "light")
  //   }

  // }
  // useEffect(() => {
  //   const currentMode = localStorage.getItem("mode") || "light";
  //   document.documentElement.classList.add(currentMode)
  //   setMode(currentMode);
  // }, [])

  
  
 

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="menu p-8 min-h-[94.5vh] lg:w-56 md:w-full w-full gap-6 text-end text-base-content">
      {/* Sidebar content here */}
      <li className="text-center"><NavLink>Home</NavLink></li>
      <li><NavLink>About</NavLink></li>
      <li><NavLink>Skills</NavLink></li>
      <li><NavLink>Projects</NavLink></li>
      <li><NavLink>Contact</NavLink></li>
      
    </ul>
    // <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-col lg:items-center lg:gap-6">
    //   <Typography
    //     as="li"
    //     variant="small"
    //     color="blue-gray"
    //     className="p-1 font-normal"
    //   >

    //     <NavLink to="/"
    //       // className="flex items-center"
    //       className={({ isActive, isPending }) =>
    //         isPending ? "pending" : isActive ? "active bg-blue-gray-50 hover:bg-blue-gray-100 p-3 rounded-md" : "hover:bg-blue-gray-100 p-3 rounded-md"}>

    //       Home
    //     </NavLink>
    //     {/* <a href="#" className="flex items-center">
    //         Pages
    //       </a> */}
    //   </Typography>
    //   <Typography
    //     as="li"
    //     variant="small"
    //     color="blue-gray"
    //     className="p-1 font-normal"
    //   >
    //     {/* <a href="#" className="flex items-center">
    //         Account
    //       </a> */}
    //     <NavLink to="/register"
    //       className={({ isActive, isPending }) =>
    //         isPending ? "pending" : isActive ? "active bg-blue-gray-50 hover:bg-blue-gray-100 p-3 rounded-md" : "hover:bg-blue-gray-100 p-3 rounded-md"}>
    //       Register
    //     </NavLink>
    //   </Typography>
    //   <Typography
    //     as="li"
    //     variant="small"
    //     color="blue-gray"
    //     className="p-1 font-normal"
    //   >
    //     {/* <a href="#" className="flex items-center">
    //         Blocks
    //       </a> */}
    //     <NavLink to="/login"
    //       className={({ isActive, isPending }) =>
    //         isPending ? "pending" : isActive ? "active bg-blue-gray-50 hover:bg-blue-gray-100 p-3 rounded-md" : "hover:bg-blue-gray-100 p-3 rounded-md"}>
    //       LogIn
    //     </NavLink>
    //   </Typography>
    //   <Typography
    //     as="li"
    //     variant="small"
    //     color="blue-gray"
    //     className="p-1 font-normal"
    //   >
    //     {/* <a href="#" className="flex items-center">
    //         Blocks
    //       </a> */}
    //     <NavLink to="/addproduct"
    //       className={({ isActive, isPending }) =>
    //         isPending ? "pending" : isActive ? "active bg-blue-gray-50 hover:bg-blue-gray-100 p-3 rounded-md" : "hover:bg-blue-gray-100 p-3 rounded-md"}>
    //       Add Product
    //     </NavLink>
    //   </Typography>
    //   <Typography
    //     as="li"
    //     variant="small"
    //     color="blue-gray"
    //     className="p-1 font-normal"
    //   >
    //     {/* <a href="#" className="flex items-center">
    //         Blocks
    //       </a> */}
    //     <NavLink
    //       to="/mycart"
    //       className={({ isActive, isPending }) =>
    //         isPending ? "pending" : isActive ? "active bg-blue-gray-50 hover:bg-blue-gray-100 p-3 rounded-md" : "hover:bg-blue-gray-100 p-3 rounded-md"}>
    //       My Cart
    //     </NavLink>
    //   </Typography>
    // </ul>
  );


  return (
    <Navbar className="sticky bg-transparent backdrop-blur-2xl top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">

        {/* logo */}
        {/* <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img className="w-14 h-12 rounded-xl" src="https://i.ibb.co/yykHgRK/INNOVATION-X1.png" alt="" />
        </Typography> */}
        {/* logo end */}


        {/* nav options mechanism */}
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
        
          {/* <button className="hover:text-gray-600 swap swap-rotate transition-transform duration-1000 ease-in-out" onClick={themeChange}>

            {
              mode == "dark" ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className={`w-6 h-6 transform transition-transform duration-500 ease-in-out rotate-45`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className={`w-6 h-6 transform transition-transform duration-500 ease-in-out rotate-0`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>


            }

          </button> */}

          






          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
      
      </Collapse>
    </Navbar>
  );
};

export default NavBar;