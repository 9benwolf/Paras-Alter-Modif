import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import bg from "../assets/contact-25.jpg";
import Button from "../components/Button";
import el1 from "../assets/contact-09.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PopUp from "../components/PopUp";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_luk8bv4",
        "template_n2om666",
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

  const el1Ref = useRef(null);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    const playAnimation = () => {
      const el1 = el1Ref.current;
      const imagesDown = gsap.utils.toArray(".imgDown");
      const imagesSlideRight = gsap.utils.toArray(".imgSlideRight");
      const imagesUp = gsap.utils.toArray(".imgUp");

      gsap.set(imagesUp, {
        opacity: 0,
        y: 100,
      });

      gsap.set(imagesDown, {
        opacity: 0,
        y: -100,
      });

      gsap.set(imagesSlideRight, {
        opacity: 0,
        x: -400,
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

      imagesDown.forEach((imgUp) => {
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
      gsap.set(el1, {
        opacity: 0,
        y: 100,
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

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 4000);
  }, []);

  return (
    <>
      <section className="w-full h-screen flex flex-col">
        <img
          src={bg}
          alt="bg"
          className="absolute inset-0 object-cover h-screen w-full"
        />
        <div
          className="absolute inset-0 flex flex-col w-full h-full items-center justify-center pt-80"
          ref={el1Ref}
        >
          <h1 className="text-white text-center text-4xl lg:text-7xl font-bold font-tnr mb-4 px-8 md:px-0">
            We'd love to hear from you!
          </h1>
        </div>
        <PopUp
          trigger={timedPopup}
          setTrigger={setTimedPopup}
          className="imgSlideLeft"
        />
      </section>
      <section className="w-full h-auto my-24 flex flex-col">
        <div className="inset-0 flex flex-col w-full h-full justify-center items-center px-8 md:px-0">
          <h1 className="imgDown text-blue-900 text-2xl md:text-3xl lg:text-4xl font-bold font-tnr mb-4 text-center">
            Questions? Comments? and Suggestion? <br />
            Please complete the form below <br /> and click submit
          </h1>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="imgUp font-cambria flex flex-col w-full md:w-5/6 lg:w-3/4 items-center justify-center lg:px-32 translate-y-4"
          >
            <input
              type="text"
              name="name"
              className=" p-2 md:p-3 m-2 bg-transparent w-11/12 md:w-9/12 border-2 rounded-xl border-blue-900"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="p-2 md:p-3 m-2 bg-transparent w-11/12 md:w-9/12 border-2 rounded-xl border-blue-900"
              placeholder="Email"
            />
            <div className="h-28 p-2 m-2 w-11/12 md:w-9/12 border-2 rounded-xl border-blue-900">
              <select
                name="concern"
                className="font-cambria text-lg w-full border-none text-gray-400 bg-white"
                defaultValue="Concern"
              >
                <option value="" disabled selected hidden>
                  Concern
                </option>
                <option value="Franchise" className="text-gray-400">
                  Franchise
                </option>
                 {" "}
                <option value="Job Application" className="text-gray-400">
                  Job Application
                </option>
                <option value="Store Concerns" className="text-gray-400">
                  Store Concerns
                </option>
                 {" "}
                <option value="Other Concerns" className="text-gray-400">
                  Other Concerns
                </option>
              </select>

              <input
              type="message"
              name="message"
              className="font-cambria text-lg w-full bg-transparent border-2 rounded-xl border-white text-black h-3/5 m-auto mt-2"
              placeholder="Message"
            />

            </div>
            <Button text="Submit" />
          </form>
        </div>
      </section>
      <section className="w-full h-auto my-24 flex flex-col">
        <div className="inset-0 flex flex-col w-full h-full justify-center items-center">
          <img src={el1} alt="el1" className="imgSlideRight lg:w-9/12" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
