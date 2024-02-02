import React, { useRef, useEffect } from "react";
import Footer from "../components/Footer";
import bg from "../assets/cfp-21(1) (Large).png";
import el3 from "../assets/quali-27(1) (Small).png";
import Button from "../components/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import AppForm from "../assets/Application-form.pdf";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
  const el1Ref = useRef(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_luk8bv4",
        "template_ah89s4v",
        form.current,
        "uPq0lj31TaPmqWyxF"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          // Refresh the page after a short delay (you can customize the delay)
          setTimeout(() => {
            window.location.reload();
          }, 1000); // Refresh after 2 seconds
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    const playAnimation = () => {
      const el1 = el1Ref.current;
      const imagesUp = gsap.utils.toArray(".imgUp");
      const imagesSlideRight = gsap.utils.toArray(".imgSlideRight");
      const imagesSlideLeft = gsap.utils.toArray(".imgSlideLeft");
      const fadeIn = gsap.utils.toArray(".fadeIn");

      gsap.set(el1, {
        opacity: 0,
        y: 100,
      });

      gsap.set(fadeIn, { opacity: 0 });

      gsap.set(imagesUp, {
        opacity: 0,
        y: 100,
      });

      gsap.set(imagesSlideRight, {
        opacity: 0,
        x: -400,
      });

      gsap.set([el1], {
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
            gsap.fromTo(
              imagesLeft,
              {
                x: 400,
                opacity: 0,
              },
              {
                duration: 2,
                opacity: 1,
                x: 0,
                ease: "expo",
              }
            );
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

      gsap.to(el1, {
        opacity: 1,
        duration: 2,
        delay: 0.5,
        y: 0,
        ease: "expo",
        stagger: 0.1,
      });
    };

    if (document.readyState === "complete") {
      playAnimation();
    } else {
      window.addEventListener("load", playAnimation);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", playAnimation);
    }
  }, []);

  return (
    <>
      <section className="w-full h-screen flex flex-col relative">
        <img
          src={bg}
          alt="bg"
          className="absolute inset-0 object-cover w-full h-screen"
        />
        <div className="absolute inset-0 flex flex-col w-full h-full items-center lg:items-end justify-start lg:justify-start xl:px-24 pt-64">
          <h1
            className="text-blue-900 text-4xl lg:text-7xl font-bold font-tnr pr-8 xl:ml-24 mb-4"
            ref={el1Ref}
          >
            Careers at <br /> Paras Alter <br /> Station
          </h1>
        </div>
      </section>
      <section className="w-full h-auto relative ">
        <div className="w-full h-full px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col md:flex-row justify-start items-start py-4 lg:py-24 ">
          <div className="flex w-full md:hidden flex-col items-center justify-center mt-20">
            <img src={el3} alt="el3" className="w-72 imgSlideLeft" />
          </div>
          <div className="md:w-7/12 flex flex-col items-center md:items-start">
            <h1 className="imgUp text-4xl lg:text-7xl font-cambria font-bold text-blue-900 my-4">
              Qualification
            </h1>
            <p className="imgUp font-cambria text-md lg:text-2xl text-justify my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul className="imgUp md:ml-24 font-cambria text-md lg:text-2xl text-justify ">
              <li>-Lorem Ipsum</li>
              <li>-Lorem Ipsum</li>
              <li>-Lorem Ipsum</li>
              <li>-Lorem Ipsum</li>
            </ul>
            <div className="imgSlideRight w-full flex justify-center md:justify-start mt-8 ">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button text="Apply Now" />
              </Link>
            </div>
          </div>
          <div className="hidden w-5/12 md:flex flex-col items-end">
            <img src={el3} alt="el3" className="imgSlideLeft w-full" />
          </div>
        </div>
      </section>
      <section className="w-full h-auto my-12 relative ">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="bg-dimBlue w-full py-6 text-center">
            <h1 className="imgUp text-4xl lg:text-7xl font-cambria font-bold text-blue-900">
              Be Part Of Our Growing Partners!
            </h1>
          </div>
          <div className="fadeIn lex flex-col px-4 md:px-8 lg:px-16 xl:px-24 py-8 w-full justify-start">
            <h2 className="font-cambria text-2xl lg:text-4xl font-bold pb-8 ">
              Application Process and Requirements
            </h2>
            <p className="font-cambria text-lg lg:text-2xl text-blue-800">
              Step 1: Inquiry
            </p>
            <ul className="md:ml-20 font-cambria text-md lg:text-2xl text-justify ">
              <li>a. Letter of Intent with list of 3 preferred locations</li>
              <li>b. Application Form</li>
              <li>c. Resume with colored ID Phone and;</li>
              <li>e. Bank statement (at least 3 months)</li>
            </ul>
            <p className="font-cambria text-lg lg:text-2xl text-blue-800">
              Step 2: Evaluation & Approval
            </p>
            <p className="md:ml-20 font-cambria text-md lg:text-2xl text-justify ">
              Schedule of First meeting for presentation, inteview, and
              discussion of the ROI, construction, payment terms, suggested
              location, acquire existing branch, and other concerns.
            </p>
            <p className="font-cambria text-lg lg:text-2xl text-blue-800">
              Step 3: Payment & Contact Signing
            </p>
            <p className="md:ml-20 font-cambria text-md lg:text-2xl text-justify ">
              Payment for reservation, Initial investment and signing off
              franchise agreement (FA) contract.
            </p>
            <p className="font-cambria text-lg lg:text-2xl text-blue-800">
              Step 4: Opening/Turn Over
            </p>
            <ul className="md:ml-20 font-cambria text-md lg:text-2xl text-justify ">
              <li>a. Opening (New Store)</li>
              <li>b. Sales and Leasing Turnover Form</li>
              <li>c. Store Turnover</li>
            </ul>
          </div>
          <div className="flex w-full justify-center">
            <a href={AppForm} download="Application-form.pdf">
              <Button text="Download Application Form" />
            </a>
          </div>
        </div>
      </section>
      <section className="w-full h-auto mt-12 relative ">
        <div className="w-full h-full flex flex-col items-center justify-center py-12">
          <h1 className="imgUp text-center text-4xl px-4 md:px-8 lg:px-16 xl:px-24 lg:text-7xl font-cambria font-bold text-blue-900">
            Submit Your Application Today!
          </h1>
          <div className="w-full flex flex-col px-4 md:px-8 lg:px-16 xl:px-24 mt-8 md:mt-16">
            <div className="flex justify-start">
              <p className="fadeIn font-cambria text-lg lg:text-2xl ">Name</p>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="fadeIn font-cambria gap-4 md:gap-12 flex flex-col w-full items-center justify-center translate-y-4"
            >
              <div className="w-full flex gap-2 md:gap-24">
                <div className="w-1/2 flex flex-col gap-2">
                  <input
                    type="text"
                    name="firstName"
                    className=" p-2 md:p-3 bg-transparent border-2 rounded-xl border-blue-900"
                    required
                  />
                  <p className="font-cambria">First</p>
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <input
                    type="text"
                    name="lastName"
                    className="p-2 md:p-3 bg-transparent border-2 rounded-xl border-blue-900"
                    required
                  />
                  <p className="font-cambria">Last</p>
                </div>
              </div>
              <div className="w-full flex justify-start gap-24">
                <div className="w-1/2 flex flex-col gap-2">
                  <p className="font-cambria text-lg lg:text-2xl ">Email</p>
                  <input
                    type="email"
                    name="email"
                    className=" p-2 md:p-3 bg-transparent border-2 rounded-xl border-blue-900"
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-2"></div>
              </div>
              <div className="w-full flex justify-center">
                <Button text="Submit" />
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Careers;
