function Hero() {
  // https://www.drjenniferhahm.com

  return (
    <div className="lg:m-12 items-center lg:mx-6 my-0 m-2">
      <img className="dr-name" src="/assets/logo-transparent.png" alt="image" />
      <div className="first-image">
        <h1 className="first-image-text lg:pt-16">Psychological Care for</h1>
        <h1 className="first-image-text">Change, Insight, and Well-Being</h1>
        <h3 className="lg:text-2xl font-serif text-white mt-9 font-extralight text-xl text-center">
          Offering individual psychotherapy for adults via telehealth in
          Michigan and <span className="underline">most U.S. states</span>
          through PSYPACT participation
        </h3>
        <button className="bg-blue-200 font-semibold flex justify-center items-center lg:mx-auto lg:my-10 text-white lg:text-sm lg:py-10 lg:px-40 rounded-[100%] uppercase lg:w-[15%] w-64 h-20 mx-auto lg:mt-16 px-8 my-6">
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
}
export default Hero;
