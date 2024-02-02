import React, { useRef, useEffect } from "react";
import Footer from "../components/Footer";
import bgNews from "../assets/N&E BG-21.png";
import el1 from "../assets/NEP-24 (Small).png";
import el2 from "../assets/NEP-25 (Small).png";
import el3 from "../assets/NEP-26 (Small).png";
import prevIcon from "../assets/prev-icon.png";
import nextIcon from "../assets/next-icon.png";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import news1 from "../assets/bata.jpg";
import news2 from "../assets/v.jpg";
import news3 from "../assets/back2.jpg";
import news4 from "../assets/d2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const News = () => {
  const el1Ref = useRef(null);
  

  useEffect(() => {
    const playAnimation = () => {
      const el1 = el1Ref.current;
      const headers = gsap.utils.toArray(".header");
      const imagesUp = gsap.utils.toArray(".imgUp");
      const imagesSlideLeft = gsap.utils.toArray(".imgSlideLeft");
      const fadeIn = gsap.utils.toArray(".fadeIn");

      gsap.set(fadeIn, { opacity: 0 });

      gsap.set([el1], {
        opacity: 0,
        y: 100
      })

      gsap.to([el1], {
        opacity: 1,
        duration: 2,
        delay: 0.5,
        y: 0,
        ease: "expo",
        stagger: 0.1

      })

      gsap.set(headers, {
        opacity: 0,
        y: 100,
      });

      gsap.set(imagesUp, {
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
    }

    if (document.readyState === 'complete') {
      playAnimation();
    } else {
      window.addEventListener('load', playAnimation);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', playAnimation);
    }

  }, [])
  

  return (
    <>
      <section className="w-full h-screen relative">
        <img
          src={bgNews}
          alt="bg"
          className="absolute inset-0 object-cover w-full h-screen"
        />
        <div className="absolute inset-0 flex flex-col w-full h-full px-12 items-end justify-end lg:px-24 pb-8">
          <h1
            className="text-blue-900 text-right text-6xl lg:text-9xl font-bold font-tnr"
            ref={el1Ref}
          >
            The <br />
            Latest
          </h1>
        </div>
      </section>
      <section className="w-full h-auto py-12 flex flex-col items-center bg-dimBlue">
        <h1 className="mb-12 text-4xl md:text-5xl header font-cambria font-bold text-blue-900 text-center">
          Catch-Up With Us!
        </h1>
        <div className=" flex flex-col w-full h-auto lg:flex-row lg:px-24 items-start justify-center">
          <div className="w-full lg:w-8/12 h-auto flex p-4">
            <Swiper
              effect={"coverflow"}
              loop={true}
              spaceBetween={60}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"2"}
              coverflowEffect={{
                rotate: 0,
                stretch: 50,
                depth: 70,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow, Pagination,Navigation]}
              pagination={{
                el: '.swiper-pagination',
                clickable: true
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="newsSlider imgUp w-full h-auto"
            >
              <SwiperSlide>
                <img src={news1} alt="news1" />
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
          <div className="imgSlideLeft w-full lg:w-4/12 p-4 lg:h-[80vh] flex gap-4 lg::gap-0 lg:pl-12 lg:flex-col">
            <div className="h-1/2 flex w-full lg:pb-4 pt-0">
              <iframe
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/ZogK9WF3ZgA?list=PLG20TVIp3VW4d-APlQksheKya5SDwluJH"
                title="EMPLYFY"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="h-1/2 flex w-full lg:pt-4 ">
              <iframe
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/1aWYlGEiRyw?list=PLG20TVIp3VW4d-APlQksheKya5SDwluJH"
                title="123456789"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-auto py-12 gap-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl header font-tnr font-bold text-blue-900 text-center">
          Care Tips
        </h1>
        <div className="w-full px-4 lg:px-24 flex items-center ">
          <p className="fadeIn text-justify font-cambria text-md lg:text-2xl ">
            <strong>PARAS ALTER STATION</strong> uses the most updated machineries available and
            being used ONSITE, to be able to be ahead of competition among our
            competitors in the alteration industry. We invest with the most
            sophisticated machineries and the most caliber and highly
            experienced staff that came from export garments industry honed for
            many years in their service, which can precisely cater to our
            clients carrying on hand the most expensive and treasured garment
            investment.
          </p>
        </div>
        <div className="imgUp w-full flex px-4 lg:px-32 items-center gap-4 justify-center">
          <Link
            to="/labels"
            onClick={() => window.scrollTo(0, 0)}
            className="w-1/3 flex flex-col items-center hover:scale-110 transition ease-in-out duration-500 "
          >
            <div className="w-full p-0 ">
              <div className="relative flex flex-col items-center">
                <img
                  src={el1}
                  alt="el1"
                  className=" shadow-xl rounded-[20%] w-6/6 md:w-5/6"
                />
                <h1 className="w-full h-[27%] fadeIn font-cambria text-[0.5rem] md:text-md lg:text-lg xl:text-2xl text-center absolute bottom-0 right-0 font-bold text-blue-900 p-1 xl:pt-3">
                  Guide on Clothing <br/> Care Labels
                </h1>
              </div>
            </div>
          </Link>
          <Link
            to="/tips"
            onClick={() => window.scrollTo(0, 0)}
            className="w-1/3 flex flex-col items-center hover:scale-110 transition ease-in-out duration-500 "
          >
            <div className="w-full p-0 ">
              <div className="relative flex flex-col items-center">
                <img
                  src={el2}
                  alt="el2"
                  className=" shadow-xl rounded-[20%] w-6/6 md:w-5/6"
                />
                <h1 className="w-full h-[27%] fadeIn font-cambria text-[0.5rem] md:text-md lg:text-lg xl:text-2xl text-center absolute bottom-0 right-0 font-bold text-blue-900 p-1 xl:pt-3">
                  Common Fabric <br/> Care Guide
                </h1>
              </div>
            </div>
          </Link>
          <Link
            to="/denim"
            onClick={() => window.scrollTo(0, 0)}
            className="w-1/3 flex flex-col items-center hover:scale-110 transition ease-in-out duration-500 "
          >
            <div className="w-full p-0 ">
              <div className="relative flex flex-col items-center">
                <img
                  src={el3}
                  alt="el3"
                  className=" shadow-xl rounded-[20%] w-6/6 md:w-5/6"
                />
                <h1 className="w-full h-[27%] px-[10%] fadeIn font-cambria text-[0.5rem] md:text-sm lg:text-lg xl:text-2xl text-center absolute bottom-0 right-0 font-bold text-blue-900 p-1 xl:pt-3">
                  5 Tips on How to Properly Wash Denim
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default News;
