import OurStoryImg from "../assets/OurStory.png";

const OurStory = () => {
    return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-5 max-md:mt-10 max-md:max-w-full">
            <div className="text-7xl font-bold text-teal-900 leading-[75px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Our Passion for Agriculture Nurturing Growth and Sustaining the
              Future
            </div>
            <div className="mt-11 text-base leading-8 text-stone-900 max-md:mt-10 max-md:max-w-full">
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie, musica, sport etc, litot
              Europa usa li sam vocabular.
            </div>
            <div className="justify-center self-start px-8 py-5 mt-12 text-xl font-semibold text-white bg-teal-900 rounded-lg max-md:px-5 max-md:mt-10">
              Get Started
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet={OurStoryImg}
            alt="Our Story"
            className="grow mt-6 w-full rounded-3xl shadow-2xl aspect-[0.92] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}



export default OurStory; 