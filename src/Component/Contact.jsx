import { Input } from "postcss";
import React from "react";

const Contact = () => {
  return (
    <div className="">
      <h1 className="text-center text-3xl mb-5">Contact Me!</h1>
      <form className="flex flex-col justify-center items-center  px-5 py-5 ">
    <div className="flex flex-row justify-center items-center gap-20 px-4 py-4 mx-48 ">
       <div className="">
       <label
          htmlFor="fullName "
          required
          placeholder="Full Name"
          className="rounded-xl w-14 outline-indigo-300 focus-within:outline-yellow-600   "
        >
          Full Name:
        </label> <br />
        <input/>
       </div>
        <div>
        <label
          htmlFor="Email"
          input="email"
          required
          placeholder="E-mail"
          className="rounded-xl w-14 "
        >
          E-mail:
        </label> <br /><input type="text" />
        </div></div>
        <div className="flex flex-row justify-center items-center gap-20 px-4 py-4"><div><label
          htmlFor="Mobile Number"
          input="number"
          required
          placeholder="Full Name"
          className="rounded-xl w-14 "
        >
          Mobile Number:
        </label> <br />
        <input type="telephone number" /></div>
        <div>
        <label
          htmlFor="Subject "
          input="text"
          required
          placeholder="Subject"
          className="rounded-xl w-14 "
        >
          Subject: 
        </label> <br /> <input type="text" />
        </div>
        </div>
       <div className="flex flex-col justify-center items-center gap-5"> <div>
        <label
          htmlFor="fullName "
          required
          
          className="rounded-xl h-30 w-30  "
        >
          Message:
        </label> <br /> <input type="text" />
        </div></div>
        <button className="bg-yellow-300 hover:bg-yellow-600 hover:text-white rounded-lg w-20 px-2 py-2 mt-3 text-base" type="submit">Get in touch</button>
      </form>
    </div>
  );
};

export default Contact;
