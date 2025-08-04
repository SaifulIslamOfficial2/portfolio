// components/Contact.jsx

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/formValid";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import cntimg from "../../assets/image/contactimg.jpg";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <section className="max-w-7xl mx-auto px-4 pt-12">
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-green-400 uppercase mb-2">Contact</p>
        <h1 className="text-slate-300 font-bold text-4xl md:text-5xl">Contact With Me</h1>
      </div>

      {/* Contact Layout */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
        {/* Left Side */}
        <div className="w-full lg:w-[40%] bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 shadow-shadowOne p-5 rounded">
          <img src={cntimg} alt="contact" className="rounded w-full mb-4" />
          <ContactLeft />
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[60%]">
          <ContactRight
            register={register}
            handleSubmit={handleSubmit}
            watch={watch}
            setValue={setValue}
            errors={errors}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
