import { GrMenu } from "react-icons/gr";
import Nav from "../Nav";
import { useState } from "react";

function Header() {
  const [navOptions, setNavOptions] = useState("hidden");

  return (
    <>
      <header
        className=" z-30  fixed flex items-center justify-center  w-full h-16 bg-primary-200 
      sm:fixed sm:px-20 sC:h-20"
      >
        <main className="w-full flex gap-5  justify-between items-center flex-row sm:justify-around mP:justify-around  ">
          <section className="flex items-center m-1 gap-5  mP:m-0">
            <div className="h-14  w-12 bg-center bg-no-repeat bg-logo bg-cover z-50 "></div>
            <span className="text-sm font-normal  hidden  font-fira  text-white sm:flex sm:text-sm lg:text-xl sC:text-xl md:text-lg">
              Olimpíadas 2024
            </span>
          </section>
          <span
            className="absolute items-center justify-center h-full  w-full  text-xl font-bebas
           text-white flex sm:hidden sm:relative"
          >
            medalhas
          </span>
          <div className="flex m-1 sm:hidden mP:m-0">
            <GrMenu
              className="text-2xl text-white z-50"
              onClick={() =>
                navOptions == "flex"
                  ? setNavOptions("hidden")
                  : setNavOptions("flex")
              }
            />
          </div>
          <Nav display={navOptions} />
        </main>
      </header>
    </>
  );
}
export default Header;
