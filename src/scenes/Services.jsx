import React, { useRef, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import bgServices from "../assets/BG-33.jpg";
import Footer from "../components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const location = useLocation();
  const source = new URLSearchParams(location.search).get('source');

  const el2Ref = useRef(null);

  const [visibleColumn, setVisibleColumn] = useState(source);

  const toggleColumn = (columnId) => {
    setVisibleColumn(columnId);
  };



  useEffect(() => {

    const playAnimation = () => {
      const el2 = el2Ref.current;
      const imagesSlideRight = gsap.utils.toArray(".imgSlideRight");
      const fadeIn = gsap.utils.toArray(".fadeIn");

      gsap.set(fadeIn, { opacity: 0 });

      gsap.set([el2], {
        opacity: 0,
        y: 100,
      });

      gsap.set(imagesSlideRight, {
        opacity: 0,
        x: -400,
      });

      gsap.set([el2], {
        opacity: 0,
        y: 100,
      });

      fadeIn.forEach((fadeIn) => {
        ScrollTrigger.create({
          trigger: fadeIn,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => {
            gsap.to(fadeIn, {
              duration: 4,
              opacity: 1,
              delay: 0.3,
              ease: "expo",
            });
          },
        });
      });

      imagesSlideRight.forEach((imageRight) => {
        ScrollTrigger.create({
          trigger: imageRight,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => {
            gsap.to(imageRight, {
              duration: 2,
              opacity: 1,
              x: 0,
              ease: "expo",
            });
          },
        });
      });
    

      gsap.to([el2], {
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
      <section className="w-full h-screen relative">
        <img
          src={bgServices}
          alt="bg"
          className="absolute inset-0 object-cover w-full h-screen"
        />
        <div className="absolute bottom-6 inset-0 flex flex-col w-full h-full px-12 items-end justify-end lg:px-24 pb-36">
          <p
            className="font-cambria text-md lg:text-2xl lg:w-6/12 text-justify pl-8"
            ref={el2Ref}
          >
            We alter, repair, mend, re-style, re-size all men's and lady's
            fashion clothing as in back to original. (Dresses, skirts, slacks,
            denim pants, trousers, shorts, suits, jackets, shirts, blouses,
            uniform, patches, jeans, bathing suits, curtains)
          </p>
        </div>
      </section>
      <section className="w-full h-auto  relative" id="services-table">
        <div className="w-full bg-dimPink">
          <h1 className="imgSlideRight text-center md:text-left p-6 text-4xl lg:text-7xl font-tnr font-bold text-blue-900 mb-4 px-24">
            Our Services
          </h1>
        </div>
        <div className="w-full h-auto mb-12 px-4 md:px-8 lg:px-16 xl:px-24">
          <table className="fadeIn w-full table-fixed">
            <thead className="font-cambria text-bold text-xl lg:text-2xl xl:text-4xl">
              <tr>
                <th
                  className={`text-left p-4 cursor-pointer hover:border-cyan-500 hover:border-b-4 ${
                    visibleColumn === "basicAlteration" ? "border-cyan-500 border-b-4" : "border-b-2 border-black"
                  }`}
                  onClick={() => toggleColumn("basicAlteration")}
                >
                  Basic Alteration
                </th>
                <th
                  className={`p-4 cursor-pointer hover:border-cyan-500 hover:border-b-4 ${
                    visibleColumn === "generalAlteration" ? "border-cyan-500 border-b-4" : "border-b-2 border-black"
                  }`} 
                  onClick={() => toggleColumn("generalAlteration")}
                >
                  General Alteration
                </th>
                <th
                  className={`text-right p-4 cursor-pointer hover:border-cyan-500 hover:border-b-4 ${
                    visibleColumn === "madeToOrder" ? "border-cyan-500 border-b-4" : "border-b-2 border-black"
                  }`}
                  onClick={() => toggleColumn("madeToOrder")}
                >
                  Made to Order
                </th>
              </tr>
            </thead>
            <tbody className="font-cambria h-[70vh] pt-12">
              <td>
                <ul
                  className={`pt-[5%] list-none font-cambria text-base lg:text-lg ${
                    visibleColumn === "basicAlteration" ? "" : "hidden"
                  }`}
                  id="basicAlteration"
                >
                  <li>Attach Patches</li>
                  <li>Attach Denim Button</li>
                  <li>Attach Label</li>
                  <li> Side Seam, Inseam, Crotch Seam</li>
                  <li>Attach Button Shacks/Shirts</li>
                  <li>Hand Sew, Machine Sew Laylayan</li>
                  <li>Mending Needle Mark/Hole</li>
                  <li>Pants Pocket Machine Sew</li>
                  <li>Tucks</li>
                  <li>Pabaston with Hemming Laylayan</li>
                  <li>Shorten Pants Denim Back to Original</li>
                  <li>Shorten Pants Denim (Ordinary)</li>
                  <li>Side Seam Blouses Both sides</li>
                  <li>Shorten Longsleeves/Adjust Sleeves</li>
                  <li>Cuffs/Adjust Armhole</li>
                  <li>Shorten Longsleeves Coat</li>
                  <li>Button Hole/Button Sew</li>
                  <li>Replace Garter</li>
                </ul>
              </td>
              <td>
                <ul
                  className={`md:px-[20%] pt-[5%] list-none font-cambria text-base lg:text-lg ${
                    visibleColumn === "generalAlteration" ? "" : "hidden"
                  }`}
                  id="generalAlteration"
                >
                  <li>Resize Men's & Lady's T-shirts</li>
                  <li>Resize Men's & Lady's Polo Shirts</li>
                  <li>Resize Men's & Lady's Wooven Polo</li>
                  <li>Resize Blouses</li>
                  <li>Whole Body Repair</li>
                  <li>Hand Sew, Machine Sew Laylayan</li>
                  <li>Change Zipper Pants/Blouse</li>
                  <li>Change Zipper Jacket</li>
                  <li>Resize Denim/Slacks Pants</li>
                  <li>Adjust Pants Slides</li>
                  <li>Change Denim/Slacks Pocket</li>
                  <li>Adjust Waist</li>
                </ul>
              </td>
              <td>
                <ul
                  className={`text-right list-none font-cambria text-base lg:text-lg ${
                    visibleColumn === "madeToOrder" ? "" : "hidden"
                  }`}
                  id="madeToOrder"
                >
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </td>
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
