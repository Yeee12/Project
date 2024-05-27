import * as React from "react";

function ContactUs() {
  return (
    <div className="flex justify-center items-center px-16 py-20 text-white bg-teal-900 max-md:px-5">
      <div className="flex gap-5 justify-between items-start mt-24 w-full max-w-[1126px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col">
          <div className="text-4xl font-bold">AgriVista Farms</div>
          <div className="mt-7 text-xl font-light leading-6">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie{" "}
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8130cc638434e0e6141ecd2b8b7044e2b3f4121ffba8ecc0cadeab540699d83?"
            className="mt-16 max-w-full aspect-[5.56] w-[220px] max-md:mt-10"
          />
        </div>
        <div className="flex gap-5 justify-between mt-2.5 text-xl">
          <div className="flex flex-col whitespace-nowrap">
            <div className="text-3xl font-bold">Pages</div>
            <div className="mt-8">Home</div>
            <div className="mt-8">About</div>
            <div className="mt-8">Product</div>
            <div className="mt-8">Blog</div>
          </div>
          <div className="flex flex-col">
            <div className="text-3xl font-bold">About</div>
            <div className="mt-9">Testimonials</div>
            <div className="mt-8">Our Service</div>
            <div className="mt-8">Contact Us</div>
            <div className="mt-8">Benefit</div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ContactUs;