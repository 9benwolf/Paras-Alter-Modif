import React, { useRef, useEffect, useState } from "react";
import bg from "../assets/ELEMENTS-28.png";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import Button from "../components/Button";
import phMap from "../assets/CAREERS_FRANCHISE-10.png";
import el3 from "../assets/HOME-33(1).png";
import card1 from "../assets/os-27.png";
import card2 from "../assets/os-35.png";
import card3 from "../assets/os-36.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import news1 from "../assets/bata.jpg";
import news2 from "../assets/v.jpg";
import news3 from "../assets/back2.jpg";
import news4 from "../assets/d2.jpg";
import prevIcon from "../assets/prev-icon.png";
import nextIcon from "../assets/next-icon.png";
import testimonials from "../assets/PARAS-WEB-DESIGN_REVISED-33.png";
import profile from "../assets/PARAS-WEB-DESIGN_REVISED-34 (1).png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
import "../index.css";
import PopUp from "../components/PopUp";
import FranchisePopUp from "../components/FranchisePopUp";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const el1Ref = useRef(null);
  const el2Ref = useRef(null);

  const [timedPopup, setTimedPopup] = useState(false);
  const [showFranchisePopUp, setShowFranchisePopUp] = useState(false);

  useEffect(() => {
    const playAnimation = () => {
      const el1 = el1Ref.current;
      const el2 = el2Ref.current;
      const headers = gsap.utils.toArray(".header");
      const imagesUp = gsap.utils.toArray(".imgUp");
      const imagesSlideRight = gsap.utils.toArray(".imgSlideRight");
      const imagesSlideLeft = gsap.utils.toArray(".imgSlideLeft");
      const fadeIn = gsap.utils.toArray(".fadeIn");
  
      gsap.set(fadeIn, { opacity: 0 });
  
      gsap.set(imagesUp, {
        opacity: 0,
        y: 100,
      });
  
      gsap.set(imagesSlideRight, {
        opacity: 0,
        x: -400,
      });

      gsap.set(headers, {
        opacity: 0,
        y: 100,
      });
  
      gsap.set([el1, el2], {
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
  
      imagesSlideLeft.forEach((imagesLeft) => {
        ScrollTrigger.create({
          trigger: imagesLeft,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => {
            gsap.fromTo(imagesLeft, {
              x:400,
              opacity: 0,
            },
            {
              duration: 2,
              opacity: 1,
              x: 0,
              ease: "expo",});
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

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 5000);
  }, []);

  useEffect(() => {
    // Check if a flag is set in session storage
    const hasPopUpBeenShown = sessionStorage.getItem('popUpShown');

    // If the flag is not set, show the pop-up with a delay
    if (!hasPopUpBeenShown) {
      setTimeout(() => {
        setShowFranchisePopUp(true);
        // Set the flag in session storage to indicate that the pop-up has been shown
        sessionStorage.setItem('popUpShown', 'true');
      }, 3000);
    }
  }, []);

  return (
    <>
      <section className="relative w-full h-screen flex flex-col">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          autoplay={{ delay: 3000 }}
          className="bgSlider absolute inset-0 object-cover w-full h-screen"
        >
          <SwiperSlide>
            <img
              src={bg}
              alt="bg"
              className="absolute inset-0 object-cover h-screen"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bg2}
              alt="bg2"
              className="absolute inset-0 object-cover w-full h-screen"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bg3}
              alt="bg3"
              className="absolute inset-0 object-cover w-full h-screen"
            />
          </SwiperSlide>
          <div className="swiper-pagination"></div>
        </Swiper>
        <div className=" absolute inset-0 flex flex-col w-full h-full items-center justify-center pt-64">
          <h1
            className="z-50 opacity-0 text-white text-4xl md:text-7xl font-bold font-tnr mb-4 text-center"
            ref={el1Ref}
          >
            We measure to satisfy.
          </h1>
          <p
            className=" z-50 text-white text-center md:text-center text-md md:text-2xl font-thin font-tnr mx-10 xl:mx-72"
            ref={el2Ref}
          >
            We are adaptable and flexible to changes to fit to the needs and
            requirements of our customers, and will continue to serve adhereing
            to the high standard and expectation our customers deserve to
            receive.
          </p>
        </div>
        <PopUp trigger={timedPopup} setTrigger={setTimedPopup} className="imgSlideLeft" />
        <FranchisePopUp trigger={showFranchisePopUp} setTrigger={setShowFranchisePopUp} />
      </section>
      <section className="relative w-full h-auto xl:h-screen flex flex-col items-center">
        <h1 className="z-20 my-12 text-4xl md:text-5xl header font-tnr font-bold text-blue-900 text-center">
          Our Services
        </h1>
        <div className="imgUp z-20 flex flex-col md:flex-row items-center px-6 justify-center">
          <Link
            to="/services?source=basicAlteration"
            onClick={() => window.scrollTo(0, 640)}
            className="md:w-1/3 flex flex-col items-center hover:scale-110 transition ease-in-out duration-500 "
          >
            <img src={card1} alt="el1" className="w-full md:w-5/6" />
            <h1 className="-translate-y-6 bg-white py-2 px-6 font-cambria text-xl lg:text-3xl text-center">
              Basic Alteration
            </h1>
          </Link>
          <Link
            to="/services?source=generalAlteration"
            onClick={() => window.scrollTo(0, 640)}
            className="md:w-1/3 flex flex-col items-center hover:scale-110 transition ease-in-out duration-500 "
          >
            <img src={card2} alt="el2" className="md:w-5/6" />
            <h1 className="-translate-y-6 bg-white font-cambria py-2 px-6 text-xl lg:text-3xl text-center">
              General Alteration
            </h1>
          </Link>
          <Link
            to="/services?source=madeToOrder"
            onClick={() => window.scrollTo(0, 640)}
            className="md:w-1/3 flex flex-col items-center hover:scale-110 transition ease-in-out duration-500 "
          >
            <img src={card3} alt="el2" className="md:w-5/6" />
            <h1 className="-translate-y-6 bg-white font-cambria py-2 px-6 text-xl lg:text-3xl text-center">
              Made to Order
            </h1>
          </Link>
        </div>
        <div className="z-20 relative xl:mt-12">
          <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
            <button className="rounded-lg bg-white my-4 px-6 py-1 text-blue-900">
              View all
            </button>
          </Link>
        </div>
        <div className="imgUp z-10 absolute bottom-0 w-full h-1/2 bg-blue-900"></div>
      </section>
      <section className="w-full h-auto py-24 bg-dimPink">
        <div className="h-full px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center justify-center">
          <div className="md:hidden flex justify-center">
            <img src={el3} alt="el3" className="w-10/12" />
          </div>
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <h1 className="text-4xl header lg:text-6xl font-cambria font-bold text-blue-900 my-4 text-center md:text-left">
              Why choose us?
            </h1>
            <p className="fadeIn font-cambria text-md lg:text-2xl text-justify my-4">
              PARAS ALTER STATION (PAS) maintains its high standard in the
              garments repair and alteration services industry. Before we
              release to customers our altered garments, we make sure that it
              has passed stringet quality control before they leave our shop. If
              they are happy, they will be able to spread the good news through
              word of mouth.
            </p>
            <Link
              to="/about"
              onClick={() => window.scrollTo(0, 0)}
              className="imgSlideRight"
            >
              <Button text="Read More" />
            </Link>
          </div>
          <div className="imgSlideLeft hidden md:flex w-1/2 justify-end">
            <img src={el3} alt="el3" className="w-10/12" />
          </div>
        </div>
      </section>
      <section className="w-full h-auto mt-12 mb-24 flex flex-col items-center justify-center">
        <h1 className="mb-12 text-4xl md:text-5xl header font-tnr font-bold text-blue-900 text-center">
          Latest News
        </h1>
        <div className="imgUp flex flex-col justify-center w-3/4 relative">
          <div className="w-full h-full">
            <Swiper
              modules={[EffectCoverflow, Pagination, Navigation]}
              effect={"coverflow"}
              spaceBetween={60}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"2"}
              coverflowEffect={{
                rotate: 0,
                stretch: 50,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                el: ".swiper-pagination", // Use a CSS selector to specify the pagination container
                clickable: true, // Allow clicking on pagination bullets to navigate
              }}
              navigation={{
                //navigation(arrows)
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="homeNewsSlider lg:w-3/4 h-auto"
            >
              <SwiperSlide>
                <img src={news1} alt="news1" className="w-full h-full shadow-lg " />
              </SwiperSlide>
              <SwiperSlide>
                <img src={news2} alt="news2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={news3} alt="news3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={news4} alt="news4" />
              </SwiperSlide>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-prev">
                <img src={prevIcon} alt="prevIcon" />
              </div>
              <div className="swiper-button-next">
                <img src={nextIcon} alt="nextIcon" />
              </div>
            </Swiper>
          </div>
        </div>
        <Link
          to="/news"
          onClick={() => window.scrollTo(0, 0)}
          className="imgUp"
        >
          <Button text="View More" />
        </Link>
      </section>
      <section className="w-full h-auto my-24 ">
        <div className="w-full h-full px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center justify-center">
          <div className="w-5/12 flex flex-col items-center">
            <img src={phMap} alt="el2" className="imgSlideRight md:w-9/12" />
          </div>
          <div className="md:w-7/12">
            <h1 className="imgUp text-4xl lg:text-6xl font-cambria font-bold text-blue-900 my-4 text-center md:text-right">
              Be Part of our <br />
              Growing Partners!
            </h1>
            <p className="imgUp font-cambria text-md lg:text-2xl my-4 text-justify md:text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="imgSlideLeft flex w-full justify-center md:justify-end">
              <Link to="/careers" onClick={() => window.scrollTo(0, 0)}>
                <Button text="Franchise Now" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-auto xl:h-screen flex flex-col items-center bg-dimPink">
        <h1 className="z-20 my-12 text-4xl md:text-5xl header font-tnr font-bold text-blue-900 text-center">
          Testimonials
        </h1>
        <div className="imgUp w-full px-4 xl:px-12 z-20 flex flex-col md:flex-row  items-center justify-center">
          <Swiper
            modules={[Navigation, Pagination]}
            className="testimonialSwiper w-full"
            slidesPerView={1}
            pagination={{
              el: ".swiper-pagination", // Use a CSS selector to specify the pagination container
              clickable: true, // Allow clicking on pagination bullets to navigate
            }}
            navigation={{
              //navigation(arrows)
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            <SwiperSlide>
              <div className="hidden lg:flex w-full h-auto justify-center gap-12 xl:gap-24 ">
                <div>
                  <img
                    src={testimonials}
                    alt="testimonials"
                    className="w-96 h-auto object-contain shadow-xl"
                  />
                  <div className="absolute top-0 flex px-4 pt-12 flex-col w-full h-full gap-20 justify-center ">
                    <p className="w-[22rem] font-cambria text-xl text-blue-900 text-justify ">
                      "Fantastic service, shortened an evening dress for me with
                      no notice at all, Am so grateful to Paras Alter Station &
                      would thorougly recommend their services."
                    </p>
                    <div className="flex w-full justify-start items-center gap-2">
                      <img src={profile} alt="profile" className="w-12" />
                      <p className="text-md font-cambria text-black">
                        Rachel (March 2020)
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={testimonials}
                    alt="testimonials"
                    className="w-96 h-auto object-contain shadow-xl"
                  />
                  <div className="absolute top-0 flex px-4 pt-12 flex-col w-full h-full gap-12 justify-center ">
                    <p className="w-[22rem] font-cambria text-lg text-blue-900 text-justify ">
                      "Can’t thank Paras Alteration enough for doing my wedding
                      dress amendments - they did exactly what I wanted & I am
                      so pleased with the end result. Thank you! Highly
                      recommend."
                    </p>
                    <div className="flex w-full justify-start items-center gap-2">
                      <img src={profile} alt="profile" className="w-12" />
                      <p className="text-md font-cambria text-black">
                        Aubrey (February 2020)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden w-full h-auto justify-center gap-24 ">
                <div>
                  <img
                    src={testimonials}
                    alt="testimonials"
                    className="w-96 h-auto object-contain shadow-xl"
                  />
                  <div className="absolute top-0 flex px-4 pt-12 flex-col w-full h-full gap-20 justify-center ">
                    <p className="w-full sm:w-[22rem] font-cambria text-xl text-blue-900 text-justify ">
                    "Fantastic service, shortened an evening dress for me with
                      no notice at all, Am so grateful to Paras Alter Station &
                      would thorougly recommend their services."
                    </p>
                    <div className="flex w-full justify-start items-center gap-2">
                      <img src={profile} alt="profile" className="w-12" />
                      <p className="text-md font-cambria text-black">
                        Rachel (March 2020)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hidden">
              <div className="flex w-full h-auto justify-center gap-24 ">
                <div>
                  <img
                    src={testimonials}
                    alt="testimonials"
                    className="w-96 h-auto object-contain shadow-xl"
                  />
                  <div className="absolute top-0 flex px-4 pt-12 flex-col w-full h-full gap-20 justify-center ">
                    <p className="w-full sm:w-[22rem] font-cambria text-xl text-blue-900 text-justify ">
                      "Very pleased with the shortening of curtains & the lovely
                      tie backs made with the waste material. Quick & reasonably
                      priced service."
                    </p>
                    <div className="flex w-full justify-start items-center gap-2">
                      <img src={profile} alt="profile" className="w-12" />
                      <p className="text-md font-cambria text-black">
                        Ellen (October 2019)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-pagination"></div>
              <div className="swiper-button-prev">
                <img src={prevIcon} alt="prevIcon" />
              </div>
              <div className="swiper-button-next">
                <img src={nextIcon} alt="nextIcon" />
              </div>
          </Swiper>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
