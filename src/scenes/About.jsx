import React, { useEffect, useRef } from "react";
import bgAbout from "../assets/about-us-bg(1).png";
import bg2 from "../assets/PARAS-WEB-DESIGN_REVISED-07(1).png";
import el1 from "../assets/About Us Page-08.png";
import el2 from "../assets/About Us Page-09.png";
import el3 from "../assets/PARAS-WEB-DESIGN_REVISED-24.png";
import el4 from "../assets/PARAS-WEB-DESIGN_REVISED-25.png";
import brand1 from "../assets/Bespoke.png";
import brand2 from "../assets/F&F Logo - Clear_Colored (1).png";
import brand3 from "../assets/Parush White.png";
import prevIcon from "../assets/prev-icon.png";
import nextIcon from "../assets/next-icon.png";
import Footer from "../components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const el1Ref = useRef(null);
  const el2Ref = useRef(null);

  useEffect(() => {

    const playAnimation = () => {
      const el1 = el1Ref.current;
      const el2 = el2Ref.current;
      const headers = gsap.utils.toArray(".header");
      const bodyText = gsap.utils.toArray(".bodyText");
      const imagesLeft = gsap.utils.toArray(".imgSideLeft");
      const imagesRight = gsap.utils.toArray(".imgSideRight");
      const delayRight = gsap.utils.toArray(".delaySlideRight");

      gsap.set(headers, {
        opacity: 0,
        y: 100,
      });

      gsap.set(bodyText, {
        opacity: 0,
        y: 100,
      });

      gsap.set(imagesLeft, {
        opacity: 0,
        x: -400,
      });

      gsap.set(delayRight, {
        opacity: 0,
        x: -400,
      });

      delayRight.forEach((delayRight) => {
        ScrollTrigger.create({
          trigger: delayRight,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => {
            gsap.to(delayRight, {
              duration: 2,
              opacity: 1,
              delay: 0.5,
              x: 0,
              ease: "expo",
            });
          },       
        });
      });


      headers.forEach((header) => {
        ScrollTrigger.create({
          trigger: header,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => {
            gsap.to(header, {
              opacity: 1,
              duration: 2,
              y: 0,
              ease: "expo",
              stagger: 0.4,
            });
          },
        });
      });

      imagesLeft.forEach((imagesLeft) => {
        ScrollTrigger.create({
          trigger: imagesLeft,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => {
            gsap.to(imagesLeft, {
              duration: 2,
              opacity: 1,
              x: 0,
              ease: "expo",
            });
          },
        });
      });

      imagesRight.forEach((imageRight) => {
        ScrollTrigger.create({
          trigger: imageRight,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => {
            gsap.fromTo(imageRight, {
              x: 400,
              opacity: 0
            },
            {
              duration: 2,
              opacity: 1,
              x: 0,
              ease: "expo",
            });
          },        
        });
      });

      bodyText.forEach((body) => {
        ScrollTrigger.create({
          trigger: body,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => {
            gsap.to(body, {
              opacity: 1,
              duration: 2,
              delay: 0.2,
              y: 0,
              ease: "expo",
            });
          },
        });
      });

      gsap.set([el1, el2], {
        opacity: 0,
        y: 100,
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
          src={bgAbout}
          alt="bg"
          className="absolute inset-0 object-cover w-full h-screen"
        />
        <div className="absolute inset-0 flex flex-col lg:flex-row w-full h-full md:px-8 lg:px-16 xl:px-24 pt-24">
          <div className="delaySlideRight flex w-full h-3/4 lg:h-full lg:w-7/12 items-center justify-center">
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                el: ".swiper-pagination", // Use a CSS selector to specify the pagination container
                clickable: true, // Allow clicking on pagination bullets to navigate
              }}
              autoplay={true}
              loop={true}
              className="brandSwiper w-full lg:h-4/6 "
            >
              <SwiperSlide>
                <img src={brand1} alt="brand1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brand2} alt="brand2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={brand3} alt="brand3" />
              </SwiperSlide>
              <div className="swiper-button-prev">
                <img src={prevIcon} alt="prevIcon" />
              </div>
              <div className="swiper-button-next">
                <img src={nextIcon} alt="nextIcon" />
              </div>
              <div className="swiper-pagination lg:hidden"></div>

            </Swiper>
          </div>
          <div className="w-full h-1/4 lg:h-full lg:w-5/12 flex items-start lg:items-end justify-center lg:justify-end ">
            <h1
              className="text-white text-4xl lg:text-7xl font-bold font-tnr mb-8"
              ref={el1Ref}
            >
              Our Brands
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full h-auto relative">
        <img
          src={bg2}
          alt="bg"
          className="inset-0 absolute object-cover w-full h-full"
        />
        <div className="w-full h-full px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col md:flex-row items-start justify-center">
          <div className="w-full flex flex-col mt-12 mb-36">
            <h1 className="header text-4xl lg:text-6xl font-cambria font-bold text-blue-900 my-4">
              How it started...
            </h1>
            <p className="bodyText font-cambria text-md lg:text-2xl my-4 w-full lg:w-9/12 text-justify">
              PARAS GARMENTS ALTER STATION is in the businesses of retail and
              wholesale of branded garments export/import overruns, food carts,
              build and sell construction, PARAS ALTER STATION franchise, and
              garments repair and alteration services. <br /> <br />
              We started the operations of our very first branch - PARAS ALTER
              STATION at Cherry Foodarama Supermarket (Now, it is SM Cherry
              Congressional) in Congressional Ave., QC. <br /> <br />
              March 1, 2009, we penetrated the SM Superamalls, Robinsons Malls,
              Ever Gotesco Malls, and Ayala Malls. We are continually expanding
              our branches to some other strategic placed to just meet the needs
              of our customers and to be accessible from wherever they are.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full h-auto py-20 bg-dimPink">
        <div className="w-full h-full px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 flex justify-start w-full">
            <img src={el1} alt="el1" className="imgSideLeft md:w-12/12" />
          </div>
          <div className="md:w-1/2 flex flex-col items-end">
            <h1 className="header text-4xl lg:text-6xl font-cambria font-bold text-blue-900 my-4">
              Mission
            </h1>
            <p className="bodyText font-cambria text-md lg:text-2xl my-4 w-11/12 text-right">
              To provide our customers excellent service and quality of
              workmanship in order to meet, exceed and satisty their needs and
              expectations.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full h-auto py-20 ">
        <div className="w-full h-full px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full flex justify-center md:hidden ">
            <img src={el3} alt="el3" className="imgSideRight w-80 md:w-10/12" />
          </div>
          <div className="md:w-1/2 flex flex-col items-start">
            <h1 className="header text-4xl lg:text-6xl font-cambria font-bold text-blue-900 my-4">
              Vision
            </h1>
            <p className="bodyText font-cambria text-md lg:text-2xl my-4 w-11/12 text-left md:text-justify">
              To be the leading service provider in the garments repair and
              alteration industry by helping our customers protect their most
              expensive wardrobe, and be able to use it overtime. <br /> <br />{" "}
              In everything we do, We put God First.
            </p>
          </div>
          <div className="w-1/2 md:flex justify-end hidden">
            <img src={el3} alt="el3" className="imgSideRight w-96 md:w-10/12" />
          </div>
        </div>
      </section>
      <section className="w-full h-auto py-20 bg-dimPink">
        <div className="w-full h-full px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center justify-center">
          <div className="md:hidden flex w-full justify-end">
            <img src={el2} alt="el2" className="imgSideRight w-96 md:w-12/12" />
          </div>
          <div className="md:w-1/2 flex flex-col items-start">
            <h1 className="header text-4xl lg:text-6xl font-cambria font-bold text-blue-900 my-4">
              Core Value
            </h1>
            <p className="bodyText font-cambria text-md lg:text-2xl my-4 w-11/12 text-justify">
              We will ensure that our customers are happy and satisfied, through
              quality workmanship, fast service, and friendly, polite staff.
            </p>
          </div>
          <div className="w-1/2 hidden md:flex">
            <img src={el2} alt="el2" className="imgSideRight w-12/12" />
          </div>
        </div>
      </section>
      <section className="w-full h-auto py-20">
        <div className="w-full h-full px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 w-full flex justify-center">
            <img src={el4} alt="el4" className="imgSideLeft w-80 md:w-10/12" />
          </div>
          <div className="md:w-1/2 flex flex-col items-end">
            <h1 className="header text-4xl lg:text-6xl font-cambria font-bold text-blue-900 my-4">
              Principle
            </h1>
            <p className="bodyText font-cambria text-md lg:text-2xl my-4 w-11/12 text-right">
              To introduce God through our actions and be able to see us who we
              are in Christ.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
