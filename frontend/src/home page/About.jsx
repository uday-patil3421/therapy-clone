function About() {
  return (
    <div className="bg-white lg:mt-14 lg:pt-28 mr-0 mt-6">
      <h1 className="lg:mx-52 lg:text-3xl font-semibold  text-[#7E7E6B] w-[100%] font-serif text-2xl pt-14 ml-7">
        About Dr. Jennifer Hahm
      </h1>
      <div className="lg:flex lg:flex-row lg:gap-28 lg:ml-auto items-center flex flex-col-reverse ml-4">
        {/* <div className="w-[100%] font-serif"> */}
        <div className="paragraph leading-loose  text-[#7E7E6B] lg:mt-8 lg:m-52 lg:mr-0 lg:w-[70%] font-serif mb-44">
          <p>
            Finding time and opportunities to care for ourselves can be
            incredibly challenging in today's busy and demanding world. I
            believe therapy offers a dedicated space for self-care, providing
            the support and tools needed to improve this essential practice.
            Therapy can help individuals identify and clarify their goals,
            values, and the various elements that contribute to their
            well-being, recognizing that these aspects vary from person to
            person.
          </p>
          <p>
            I am dedicated to supporting this journey by offering active
            listening, psychological knowledge, empathy, compassion, and
            insights into behavioral patterns and tendencies. I hold a master’s
            degree in Clinical Psychology from the Michigan School of Psychology
            (2012) and a Ph.D. in Counseling Psychology from Western Michigan
            University (2018). My experience spans therapy and psychological
            assessment in psychiatric inpatient units, academic medical centers,
            universities, and outpatient practice settings.
          </p>
          <p>
            My therapeutic approach is primarily psychodynamic and humanistic,
            enriched by influences from positive psychology, existentialism,
            family systems theory, acceptance and commitment concepts, and
            mindfulness practices.
          </p>
        </div>
        {/* </div> */}
        <div className="lg:w-[80%] lg:mb-auto lg:mr-14 lg:mt-0">
          <img
            className="lg:w-[73%] lg:h-[75%] h-[45%] w-[50%] lg:mx-0 lg:mt-0 mx-auto mt-7"
            src="/assets/dr.jennifer.jpg"
            alt="dr image"
          />
        </div>
      </div>
      <div className="hr-line m-auto"></div>
    </div>
  );
}
export default About;
