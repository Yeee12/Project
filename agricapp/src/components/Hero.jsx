import Herobg from "../assets/Herobg.jpg";

const Hero = () => {
    return (
    <div className="flex flex-col">
      <div className="px-20 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="self-stretch my-auto text-3xl font-bold text-stone-900 max-md:mt-10">
              Agrivista Farms
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-5 justify-between self-stretch my-auto text-xl font-semibold text-stone-900 max-md:mt-10">
              <div>Home</div>
              <div>About Us</div>
              <div>Pages</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 justify-between text-xl font-semibold text-center max-md:mt-10">
              <div className="justify-center px-11 py-4 text-white whitespace-nowrap bg-teal-900 rounded-lg max-md:px-5">
                Login
              </div>
              <div className="justify-center px-8 py-4 text-teal-900 rounded-lg border border-teal-900 border-solid max-md:px-5">
                Sign Up
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center w-full text-center text-white min-h-[817px] max-md:max-w-full">
      <img
        loading="lazy"
        srcSet={Herobg}
        alt="field"
        className="object-cover absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }} // Ensure the image is behind the overlay
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      {/* Black background overlay */}
        <div className="flex relative justify-center items-center px-16 py-20 w-full bg-stone-900 bg-opacity-60 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-center mt-28 mb-12 w-full max-w-[1067px] max-md:my-10 max-md:max-w-full">
            <div className="self-stretch text-8xl font-bold leading-[94px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
              The Role of Technology in Revolutionizing Agriculture
            </div>
            <div className="mt-7 text-base leading-6 w-[540px] max-md:max-w-full">
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie, musica, sport etc, litot
              Europa usa li sam vocabular.
            </div>
            <div className="flex gap-5 justify-between mt-20 max-w-full text-xl font-semibold w-[403px] max-md:mt-10">
              <div className="justify-center px-9 py-4 bg-teal-900 rounded-lg max-md:px-5">
                Get Started
              </div>
              <div className="justify-center px-9 py-4 rounded-lg border border-white border-solid max-md:px-5">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;

