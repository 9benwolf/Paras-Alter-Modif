import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import el2 from "../assets/pop up-30 (Small).png";

const FranchisePopUp = (props) => {
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

  return props.trigger ? (
    <div className="overscroll-none z-[999] fixed top-0 left-0 w-full h-screen bg-opaqueWhite flex justify-center items-center">
      <div className="w-80 h-80 flex flex-col gap-1 bg-[#75deff] shadow-black shadow-lg">
        <div className="flex justify-end items-start w-full p-4 ">
          <img
            src={el2}
            alt="el2"
            className="w-4 cursor-pointer"
            onClick={() => props.setTrigger(false)}
          />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="w-full flex flex-col items-center gap-4 px-4">
            <h1 className="font-cambria text-2xl">Sign up to Franchise.</h1>

            <input
              type="text"
              name="name"
              className="p-2 md:p-3 bg-white w-11/12 md:w-9/12 border-2 rounded-xl border-white text-black"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="p-2 md:p-3 bg-white w-11/12 md:w-9/12 border-2 rounded-xl border-white text-black"
              placeholder="Email"
            />
          </div>
          <div className="w-full flex justify-center px-4">
            <button className="font-cambria rounded-lg bg-blue-900 my-4 px-6 py-1 text-white transition ease-in-out duration-300 hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default FranchisePopUp;
