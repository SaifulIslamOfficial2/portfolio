// components/ContactRight.jsx

import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactRight = ({ register, handleSubmit, watch, setValue, errors, onSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-6 sm:p-10 flex flex-col justify-center gap-6 sm:gap-10 shadow-lg"
    >
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="w-full sm:w-1/2 space-y-1">
          <label htmlFor="name" className="text-lightText font-semibold uppercase">Name</label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="w-full text-white h-11 rounded-lg border border-gray-600 bg-black bg-opacity-30 px-4 focus:outline-none focus-visible:outline-green-400 duration-300"
          />
          {errors.name && <span className="text-red-400">{errors.name?.message}</span>}
        </div>

        <div className="w-full sm:w-1/2 space-y-1">
          <label htmlFor="phone" className="text-lightText font-semibold uppercase">Phone</label>
          <PhoneInput
            {...register("phone", { required: "Phone is required" })}
            country="bd"
            value={watch("phone")}
            onChange={(phone) => setValue("phone", phone)}
            inputClass="!bg-transparent !text-white !border-none !outline-none"
            containerClass="!bg-transparent !border-none"
            buttonClass="!bg-transparent"
            dropdownClass="!bg-black !text-white"
          />
          {errors.phone && <span className="text-red-400">{errors.phone?.message}</span>}
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="text-lightText font-semibold uppercase">Email</label>
        <input
          {...register("email")}
          id="email"
          type="email"
          className="w-full text-white h-11 rounded-lg border border-gray-600 bg-black bg-opacity-30 px-4 focus:outline-none focus-visible:outline-green-400 duration-300"
        />
        {errors.email && <span className="text-red-400">{errors.email?.message}</span>}
      </div>

      <div className="space-y-1">
        <label htmlFor="subject" className="text-lightText font-semibold uppercase">Subject</label>
        <input
          {...register("subject")}
          id="subject"
          type="text"
          className="w-full text-white h-11 rounded-lg border border-gray-600 bg-black bg-opacity-30 px-4 focus:outline-none focus-visible:outline-green-400 duration-300"
        />
        {errors.subject && <span className="text-red-400">{errors.subject?.message}</span>}
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="text-lightText font-semibold uppercase">Your Message</label>
        <textarea
          {...register("message")}
          id="message"
          className="w-full text-white h-24 rounded-lg border border-gray-600 bg-black bg-opacity-30 px-4 py-2 focus:outline-none focus-visible:outline-green-400 duration-300"
        />
        {errors.message && <span className="text-red-400">{errors.message?.message}</span>}
      </div>

      <div className="py-2 px-6 border hover:border-green-400 border-transparent text-center rounded hover:bg-[#1c1e26] font-semibold text-green-400 shadow-shadowOne hover:text-green-600 w-full hover:-translate-y-2 duration-300">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
};

export default ContactRight;
