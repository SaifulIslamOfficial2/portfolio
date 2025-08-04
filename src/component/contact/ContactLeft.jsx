// components/ContactLeft.jsx

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="space-y-2 mt-4">
      <h3 className="uppercase text-2xl font-semibold text-lightText">Saiful Islam</h3>
      <p className="text-slate-500">
        I am available for freelance work. Connect with me via and call in to my account.
      </p>

      <div className="flex gap-1 items-center">
        <p className="text-slate-500">Phone:</p>
        <a
          href="tel:+8801863184444"
          className="text-slate-500 hover:text-green-400 hover:underline"
        >
          +8801863184444
        </a>
      </div>

      <div className="flex gap-1 items-center">
        <p className="text-slate-500">E-mail:</p>
        <a
          href="mailto:muftisaifulislam.bd@gmail.com"
          className="text-slate-500 hover:text-green-400 hover:underline"
        >
          muftisaifulislam.bd@gmail.com
        </a>
      </div>

      <div>
        <h3 className="uppercase text-white mb-3 mt-8">Find with me</h3>
        <div className="flex gap-3">
          <Link
            to="https://www.facebook.com/mdsaifulislambd2"
            className="p-3 transition-transform hover:bg-[#1c1e26] hover:scale-110 rounded bg-bodyColor shadow-shadowOne"
          >
            <FaFacebookF className="text-green-400" />
          </Link>
          <Link
            to="#"
            className="p-3 transition-transform hover:bg-[#1c1e26] hover:scale-110 rounded bg-bodyColor shadow-shadowOne"
          >
            <FaInstagram className="text-green-400" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/saifulislamofficial2/"
            className="p-3 transition-transform hover:bg-[#1c1e26] hover:scale-110 rounded bg-bodyColor shadow-shadowOne"
          >
            <FaLinkedinIn className="text-green-400" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
