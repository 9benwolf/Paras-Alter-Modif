import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import el1 from "../assets/A4 Wash Denim (Large).png";

const Denim = () => {
  return (
    <>
      <div className="h-28"></div>   
      <section className="w-full h-auto flex flex-col items-center">
        <div className="flex w-full items-center">
          <img src={el1} alt="el4" className="w-full" />
        </div>
      </section>
      <div className="w-full h-auto flex justify-between px-8 lg:px-24">
        <Link
          to="/tips"
          onClick={() => window.scrollTo(0, 0)}
          className="imgSlideRight"
        >
          <div className="flex flex-col py-4 group">
            <h3 className="text-right font-cambria text-blue-900 font-bold text-lg lg:text-xl group-hover:underline cursor-pointer ">
              ← Previous Post{" "}
            </h3>
            <h3 className="text-right font-cambria text-blue-900 text-md lg:text-lg group-hover:underline cursor-pointer">
              {" "}
              Common Fabric Care <br /> Guide
            </h3>
          </div>
        </Link>

        <Link
          to="/news"
          onClick={() => window.scrollTo(0, 0)}
          className="imgSlideRight"
        >
          <button className="font-cambria rounded-lg bg-blue-900 my-8 px-6 py-1 text-white transition ease-in-out duration-300 hover:bg-blue-700">
            Back to News & Events
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Denim;
