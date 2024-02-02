import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import img1 from "../assets/ELEMENTS-18.png";
import img2 from "../assets/ELEMENTS-17.png";
import img3 from "../assets/ELEMENTS-16.png";
import logo2 from "../assets/PAS Logo - White Blue R (Medium).png";
import logo3 from "../assets/Parush White (Small).png";
import logo4 from "../assets/Bespoke (Small).png";
import logo5 from "../assets/F&F Logo - Clear_Colored(1) (Small).png";
import fb from "../assets/ELEMENTS-19.png";
import ig from "../assets/ELEMENTS-20.png";

const Footer = () => {
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

  return (
    <section className="w-full h-auto bg-sky-300 flex flex-col items-center">
      <h1 className="font-cambria text-white text-4xl md:text-7xl font-bold m-8 translate-y-4">
        Get in touch!
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-full items-center justify-center lg:px-32 translate-y-4"
      >
        <div className="flex flex-col md:flex-row w-full items-center">
          <div className="font-cambria w-full md:w-1/2 flex flex-col items-center lg:items-end">
            <input
              type="text"
              name="name"
              className="p-2 md:p-3 m-2 bg-transparent w-11/12 md:w-9/12 border-2 rounded-xl border-white text-white"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="p-2 md:p-3 m-2 bg-transparent w-11/12 md:w-9/12 border-2 rounded-xl border-white text-white"
              placeholder="Email"
            />
          </div>
          <div className="w-full md:w-1/2 flex lg:justify-start justify-center h-full">
            <div className="h-28 p-2 m-2 w-11/12 md:w-9/12 border-2 rounded-xl border-white">
              <select
                name="concern"
                className="font-cambria text-lg w-full border-white text-white bg-sky-300"
                defaultValue="Concern"
              >
                <option value="Concern" disabled hidden>
                  Concern
                </option>
                <option value="Franchise" className="text-white">
                  Franchise
                </option>
                <option value="Job Application" className="text-white">
                  Job Application
                </option>
                <option value="Store Concerns" className="text-white">
                  Store Concerns
                </option>
                <option value="Other Concerns" className="text-white">
                  Other Concerns
                </option>
              </select>

              <input
              type="message"
              name="message"
              className="w-full bg-transparent border-2 rounded-xl border-white text-white h-3/5 m-auto mt-2"
              placeholder="Message"
            />

            </div>
          </div>
        </div>
        <div>
          <button className="rounded-lg bg-white my-4 px-6 py-1 text-blue-900">
            Submit
          </button>
        </div>
      </form>
      <div className="w-full h-auto grid grid-cols-3 mt-16 px-4 md:px-12 pb-8">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-white font-cambria text-base md:text-lg lg:text-2xl">
            Official Member of:
          </h2>
          <img src={img1} alt="img1" className="w-24 lg:w-48" />
          <img src={img2} alt="img2" className="w-14 lg:w-28" />
          <img src={img3} alt="img3" className="w-16 lg:w-32" />
        </div>
        <div className="flex flex-col justify-center items-center gap-1 md:gap-4">
          <img src={logo2} alt="logo2" className="w-24 lg:w-72" />
          <h2 className="font-cambria text-white text-sm lg:text-2xl lg:mt-8">
            Our Brands
          </h2>
          <div className="w-full flex flex-col md:flex-row gap-1 justify-center items-center">
            <img src={logo4} alt="logo3" className="w-16 lg:w-40" />
            <img src={logo3} alt="logo3" className="w-16 lg:w-40" />
            <img src={logo5} alt="logo3" className="w-16 lg:w-40" />
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex justify-end mt-2 lg:mt-5 lg:mb-8">
            <img
              src={fb}
              alt="fb"
              className="w-10 md:w-16 lg:mx-2 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/ParasAlterStation/",
                  "_blank"
                )
              }
            />
            <img
              src={ig}
              alt="ig"
              className="w-10 md:w-16 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/ParasAlterStation/",
                  "_blank"
                )
              }
            />
          </div>
          <h2 className="font-cambria text-white text-xs lg:text-xl text-right">
            Terms and Conditions
          </h2>
          <h2 className="font-cambria text-white text-xs lg:text-xl">
            Public Notice
          </h2>
          <p className="font-cambria text-white text-[0.4rem] lg:text-xs mt-6 text-right">
            Copyright 2009-2019. All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
