import React, { useRef, useEffect, useState } from "react";
import bg from "../assets/BRANCHES-32 (1).png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { branchesNCR, branchesRegion3, branchesRegionIV } from "../data/BranchData.js";
import SearchBar from "../components/SearchBar";

const Branches = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [visibleColumn, setVisibleColumn] = useState("metro-manila");

  const toggleColumn = (columnId) => {
    setVisibleColumn(columnId);
  };

  const el1Ref = useRef(null);
  const el2Ref = useRef(null);

  useEffect(() => {
    const playAnimation = () => {
      const el1 = el1Ref.current;
      const el2 = el2Ref.current;
      const imagesUp = gsap.utils.toArray(".imgUp");

      gsap.set([el1, el2, imagesUp], {
        opacity: 0,
        y: 100,
      });

      imagesUp.forEach((imgUp) => {
        ScrollTrigger.create({
          trigger: imgUp,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => {
            gsap.to(imgUp, {
              opacity: 1,
              duration: 2,
              delay: 0.2,
              y: 0,
              ease: "expo",
            });
          },      
        });
      });

      gsap.to([el1, el2], {
        opacity: 1,
        duration: 2,
        delay: 0.5,
        y: 0,
        ease: "expo",
        stagger: 0.1,
      });
    }

    if (document.readyState === 'complete') {
      playAnimation();
    } else {
      window.addEventListener('load', playAnimation);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', playAnimation);
    }
    
  }, []);

  return (
    <>
      <section className="w-full h-screen flex flex-col">
        <img
          src={bg}
          alt="bg"
          className="absolute inset-0 object-cover h-screen w-full"
        />
        <div className="absolute inset-0 flex flex-col w-full h-full items-center justify-center px-12 pt-64">
          <h1
            className="text-white text-2xl lg:text-4xl font-bold font-tnr mb-4 text-center md:w-5/6"
            ref={el1Ref}
          >
            Welcome to the Paras Alter Station Branch Directory where you can
            view maps, and check available stores and services at different
            malls nationwide!
          </h1>
          <div className="w-full flex justify-center imgUp">
            <SearchBar branchesData={[branchesNCR, branchesRegionIV, branchesRegion3]}/>
          </div>
        </div>
      </section>
      <section className="w-full py-12 h-auto flex flex-col bg-dimBlue justify-center items-center">
        <div className="imgUp w-full pb-16 grid grid-cols-3 px-4 md:px-8 lg:px-16 xl:px-24 gap-4">
          <div
            className={`text-center py-4 rounded-3xl font-cambria font-bold text-[0.5rem] md:text-lg shadow-lg transition ease-in-out duration-3000 cursor-pointer hover:bg-blue-900 hover:text-white ${
              visibleColumn === "metro-manila"
                ? " bg-blue-900 text-white"
                : "bg-white"
            }`}
            onClick={() => toggleColumn("metro-manila")}
          >
            Metro Manila
          </div>
          <div
            className={`text-center py-4 rounded-3xl font-cambria font-bold text-[0.5rem] md:text-lg shadow-lg transition ease-in-out duration-3000 cursor-pointer hover:bg-blue-900 hover:text-white ${
              visibleColumn === "north-luzon"
                ? " bg-blue-900 text-white"
                : "bg-white"
            }`}
            onClick={() => toggleColumn("north-luzon")}
          >
            Central Luzon
          </div>
          <div
            className={`text-center py-4 rounded-3xl font-cambria font-bold text-[0.5rem] md:text-lg shadow-lg transition ease-in-out duration-3000 cursor-pointer hover:bg-blue-900 hover:text-white ${
              visibleColumn === "south-luzon"
                ? " bg-blue-900 text-white"
                : "bg-white"
            }`}
            onClick={() => toggleColumn("south-luzon")}
          >
            South Luzon
          </div>
        </div>
        <div className="imgUp h-auto">
          <div
            className={`grid grid-cols-2 md:grid-cols-3 grid-rows-2 px-4 md:px-8 lg:px-16 xl:px-24 ${
              visibleColumn === "metro-manila" ? "" : "hidden"
            }`}
            id="metro-manila"
          >
            {branchesNCR.map((branch) => (
              <Link to={`/details/${branch._id}?region=metro-manila`} onClick={() => window.scrollTo(0, 0)} className="rounded-[18%] shadow-xl scale-[85%] transition ease-in-out duration-300 hover:scale-[90%]">
                <img src={branch.picture} alt={branch.picture} />
                <h1 className="w-full h-[24%]  font-cambria text-xs md:text-md lg:text-lg xl:text-2xl text-center absolute bottom-0 right-0 font-bold text-blue-900 p-1 pt-2 xl:pt-8">
                  {branch.name}
                </h1>
              </Link>
            ))}
          </div>
        </div>
        <div className="h-auto">
          <div
            className={`grid grid-cols-2 md:grid-cols-3 grid-rows-2 px-4 md:px-8 lg:px-16 xl:px-24 ${visibleColumn === "south-luzon" && branchesRegionIV.length > 0 ? "" : "hidden"}`}
            id="south-luzon"
          >
            {branchesRegionIV.map((branch) => (
              <Link to={`/details/${branch._id}?region=south-luzon`} onClick={() => window.scrollTo(0, 0)} className="rounded-[18%] shadow-xl scale-[85%] transition ease-in-out duration-300 hover:scale-[90%]">
                <img src={branch.picture} alt={branch.picture} />
                <h1 className="w-full h-[24%]  font-cambria text-xs md:text-md lg:text-lg xl:text-2xl text-center absolute bottom-0 right-0 font-bold text-blue-900 p-1 pt-2 xl:pt-8">
                  {branch.name}
                </h1>
              </Link>
            ))}
          </div>
        </div>
        <div className="h-auto">
          <div
            className={`grid grid-cols-2 md:grid-cols-3 grid-rows-2 px-4 md:px-8 lg:px-16 xl:px-24 ${visibleColumn === "north-luzon" && branchesRegionIV.length > 0 ? "" : "hidden"}`}
            id="north-luzon"
          >
            {branchesRegion3.map((branch) => (
              <Link to={`/details/${branch._id}?region=north-luzon`} onClick={() => window.scrollTo(0, 0)} className="rounded-[18%] shadow-xl scale-[85%] transition ease-in-out duration-300 hover:scale-[90%]">
                <img src={branch.picture} alt={branch.picture} />
                <h1 className="w-full h-[24%]  font-cambria text-xs md:text-md lg:text-lg xl:text-2xl text-center absolute bottom-0 right-0 font-bold text-blue-900 p-1 pt-2 xl:pt-8">
                  {branch.name}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Branches;
