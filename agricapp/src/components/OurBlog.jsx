import * as React from "react";

function OurBlog() {
  return (
    <div className="flex flex-col px-5">
      <div className="self-center text-7xl font-bold text-center text-teal-900 leading-[82.08px] max-md:text-4xl">
        Our Blog
      </div>
      <div className="self-center mt-7 text-xl leading-6 text-center text-zinc-500 w-[690px] max-md:max-w-full">
        Li Europan lingues es membres del sam familie. Lor separat existentie es
        un myth. Por scientie, musica, sport etc, litot Europa usa li sam
        vocabular.{" "}
      </div>
      <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="..."
              className="grow w-full aspect-[0.81] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="..."
              className="grow w-full aspect-[0.81] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="..."
              className="grow w-full aspect-[0.81] max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="mt-11 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xl text-teal-900 max-md:mt-10">
              <div className="text-3xl font-bold leading-9">
                Innovations for a Greener Future
              </div>
              <div className="mt-9 font-light leading-6 text-stone-900">
                Li Europan lingues es membres del sam familie. Lor separat
                existentie es un myth. Por scientie, musica.
              </div>
              <div className="mt-8 underline leading-[120%]">Read More</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xl text-teal-900 max-md:mt-10">
              <div className="text-3xl font-bold leading-9">
                The Power of <br />
                Agricultural Analytics
              </div>
              <div className="mt-7 font-light leading-6 text-stone-900">
                Li Europan lingues es membres del sam familie. Lor separat
                existentie es un myth. Por scientie, musica.
              </div>
              <div className="mt-8 underline leading-[120%]">Read More</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xl text-teal-900 max-md:mt-10">
              <div className="text-3xl font-bold leading-9">
                Cultivating Sustainable and Resilient Farms
              </div>
              <div className="mt-9 font-light leading-6 text-stone-900">
                Li Europan lingues es membres del sam familie. Lor separat
                existentie es un myth. Por scientie, musica.
              </div>
              <div className="mt-8 underline leading-[120%]">Read More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

 
export default OurBlog;