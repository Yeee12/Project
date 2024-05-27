import * as React from "react";

function Testimonials() {
  return (
    <div className="flex flex-col items-center px-5">
      <div className="text-7xl font-bold text-center text-teal-900 leading-[82.08px] max-md:max-w-full max-md:text-4xl">
        Testimonials{" "}
      </div>
      <div className="mt-11 text-xl leading-6 text-center text-stone-900 w-[690px] max-md:mt-10 max-md:max-w-full">
        Li Europan lingues es membres del sam familie. Lor separat existentie es
        un myth. Por scientie, musica, sport etc, litot Europa usa li sam
        vocabular.{" "}
      </div>
      <div className="flex gap-5 justify-between items-center self-stretch mt-20 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7fccba24738554287acdd729add2257f609e3a3b138a5e4d6330d5863cd352d?"
          className="shrink-0 self-stretch my-auto aspect-square w-[70px]"
        />
        <div className="flex justify-center items-center self-stretch px-16 py-20 bg-teal-900 rounded-3xl max-md:px-5 max-md:max-w-full">
          <div className="mt-6 max-w-full w-[778px]">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="w-full aspect-square max-md:mt-10"
                />
              </div>
              <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-white max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f05308d274e1b6084db39e06aa183f66a01f7e357cbe5bb4b3d72166bd499f34?"
                    className="max-w-full aspect-[5.26] w-[212px]"
                  />
                  <div className="mt-6 text-3xl font-semibold leading-6 max-md:max-w-full">
                    Madeline Williamson
                  </div>
                  <div className="mt-8 text-base font-light leading-6 max-md:max-w-full">
                    Forward Creative Manager
                  </div>
                  <div className="mt-8 text-xl leading-6 max-md:max-w-full">
                    Li Europan lingues es membres del sam familie. Lor separat
                    existentie es un myth. Por scientie, musica, sport etc,
                    litot Europa usa li sam vocabular.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6c8e1864456dcc3c33a3facb6097369600e9a353dd7c09a82135f22110b6908?"
          className="shrink-0 self-stretch my-auto aspect-square w-[70px]"
        />
      </div>
    </div>
  );
}


export default Testimonials;