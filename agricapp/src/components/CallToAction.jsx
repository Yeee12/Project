import * as React from "react";

function CallToAction() {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center text-white min-h-[629px]">
      <img
        loading="lazy"
        srcSet="..."
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-start p-20 w-full bg-black bg-opacity-60 max-md:px-5 max-md:max-w-full">
        <div className="mt-16 text-7xl font-bold leading-[75px] w-[983px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Sustainable Farming Meets Technology: Building a Greener Future
        </div>
        <div className="flex gap-5 justify-between mt-20 mb-7 text-xl font-semibold text-center max-md:mt-10 max-md:ml-1.5">
          <div className="justify-center px-10 py-5 bg-teal-900 rounded-lg max-md:px-5">
            Learn More
          </div>
          <div className="justify-center px-10 py-5 rounded-lg border border-white border-solid max-md:px-5">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
}


export default CallToAction;