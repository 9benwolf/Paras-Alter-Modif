import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import el1 from "../assets/A4 Fabric Care (Large).png";

const Tips = () => {
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
          to="/labels"
          onClick={() => window.scrollTo(0, 0)}
          className="imgSlideRight"
        >
          <div className="flex flex-col py-4 group">
            <h3 className="font-cambria text-blue-900 font-bold text-lg lg:text-xl group-hover:underline cursor-pointer ">
              ← Previous Post{" "}
            </h3>
            <h3 className=" text-right font-cambria text-blue-900 text-md lg:text-lg group-hover:underline cursor-pointer">
              {" "}
              Guide on Clothing <br/> Care Labels
            </h3>
          </div>
        </Link>
        <Link
          to="/denim"
          onClick={() => window.scrollTo(0, 0)}
          className="imgSlideRight"
        >
          <div className="flex flex-col py-4 group">
            <h3 className="font-cambria text-blue-900 font-bold text-lg lg:text-xl group-hover:underline cursor-pointer ">
              Next Post→{" "}
            </h3>
            <h3 className="font-cambria text-blue-900 text-md lg:text-lg group-hover:underline cursor-pointer">
              {" "}
              5 Tips How to Properly <br /> Wash Denim
            </h3>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Tips;
