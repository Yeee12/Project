import * as React from "react";

function Product() {
  return (
    <div className="flex flex-col items-center px-5">
      <div className="text-7xl font-bold text-center text-teal-900 leading-[74.88px] max-md:max-w-full max-md:text-4xl">
        Our Featured Product
      </div>
      <div className="mt-10 text-xl leading-6 text-center text-stone-900 w-[540px] max-md:max-w-full">
        Li Europan lingues es membres del sam familie. Lor separat existentie es
        un myth Por scientie, musica.
      </div>
      <div className="self-stretch mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-12 py-14 w-full text-center bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.99] w-[189px]"
              />
              <div className="mt-11 text-2xl leading-6 text-teal-900 max-md:mt-10">
                Rice
              </div>
              <div className="self-stretch mt-9 text-base leading-8 text-stone-900">
                Li Europan lingues es membres del sam familie. Lor separat
                existentie es un myth.{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-11 py-14 w-full text-center bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[1.02] w-[193px]"
              />
              <div className="mt-11 text-2xl leading-6 text-teal-900 max-md:mt-10">
                Wheat
              </div>
              <div className="self-stretch mt-9 text-base leading-8 text-stone-900">
                Li Europan lingues es membres del sam familie. Lor separat
                existentie es un myth.{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-12 py-14 w-full text-center bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.99] w-[189px]"
              />
              <div className="mt-11 text-2xl leading-6 text-teal-900 max-md:mt-10">
                Pumpkin
              </div>
              <div className="self-stretch mt-8 text-base leading-8 text-stone-900">
                Li Europan lingues es membres del sam familie. Lor separat
                existentie es un myth.{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-12 py-14 w-full text-center bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.99] w-[189px]"
              />
              <div className="mt-11 text-2xl leading-6 text-teal-900 max-md:mt-10">
                Cabbage
              </div>
              <div className="self-stretch mt-8 text-base leading-8 text-stone-900">
                Li Europan lingues es membres del sam familie. Lor separat
                existentie es un myth.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 text-xl font-bold leading-5 text-center text-teal-900 underline max-md:mt-10">
        See all product
      </div>
    </div>
  );
}


export default Product;