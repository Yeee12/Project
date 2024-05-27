import * as React from "react";

function Benefits() {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto text-xl max-md:mt-10 max-md:max-w-full">
            <div className="text-7xl font-bold text-teal-900 leading-[82px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
              The Benefits of Choosing Our Expertise
            </div>
            <div className="mt-9 leading-6 text-stone-900 max-md:max-w-full">
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie, musica, sport etc, litot
              Europa usa li sam vocabular.{" "}
            </div>
            <div className="flex gap-4 self-start px-9 py-5 mt-20 font-semibold text-white bg-teal-900 rounded-lg max-md:px-5 max-md:mt-10">
              <div className="flex-auto">Learn More</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/01ff33700529a34183be4c78411098c1a80b32e5cf764b093818637e17667e6a?"
                className="shrink-0 self-start w-5 border-2 border-white border-solid aspect-[1.18] stroke-[1.5px] stroke-white"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <div className="flex grow justify-center items-center px-16 py-20 w-full text-white bg-teal-900 rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[391px]">
              <div className="flex gap-5 justify-between">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4db6b5383e37b0c647698421ce3f3bb1f6ddc2c21f9796b39e6f7bfc692808ba?"
                  className="shrink-0 max-w-full aspect-square w-[125px]"
                />
                <div className="flex flex-col my-auto">
                  <div className="text-5xl font-bold leading-10 max-md:text-4xl">
                    15+
                  </div>
                  <div className="mt-8 text-xl leading-7">
                    Years Of Experience
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-10 whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/14babc9b6af12d77aa99774d92e2c9975f181c47171bacb3b91d6bac463df1b6?"
                  className="shrink-0 max-w-full aspect-square w-[125px]"
                />
                <div className="flex flex-col my-auto">
                  <div className="text-5xl font-bold leading-10 max-md:text-4xl">
                    40+
                  </div>
                  <div className="mt-8 text-xl leading-7">Product</div>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-10">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 rounded-full aspect-square bg-black bg-opacity-40 h-[125px] w-[125px]"
                />
                <div className="flex flex-col my-auto">
                  <div className="text-5xl font-bold leading-10 max-md:text-4xl">
                    2,458+
                  </div>
                  <div className="mt-7 text-xl leading-7">
                    Satisfied Clients
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3abfe19c63c9ad11372b5c17f5d526d59e3e169b0a69f8afc97314f0687f67d9?"
                  className="shrink-0 max-w-full aspect-square w-[125px]"
                />
                <div className="flex flex-col my-auto">
                  <div className="text-5xl font-bold leading-10 max-md:text-4xl">
                    20
                  </div>
                  <div className="mt-8 text-xl leading-7">
                    Local Team Members
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}export default Benefits;

