function Service() {
  return (
    <div className="lg:p-12 pt-7">
      <div className="text-center lg:py-12 lg:px-56 font-serif leading-loose lg:space-y-4 px-3">
        <h2 className="lg:text-4xl text-[#565652] text-3xl font-light">
          Therapy can be a space where you invest in
        </h2>
        <h2 className="lg:text-4xl text-[#565652] lg:mt-0 lg:mb-0 text-3xl font-light mt-2 mb-10">
          yourself — one of the highest forms of self-care.
        </h2>
        <p className="text-[#74746d] lg:text-base text-lg">
          You may be led to therapy by anxiety, depression, relationship stress,
          past or recent trauma, grief and loss, self-esteem issues, or
          challenges with family, parenting, or parental relationships. Whatever
          the source of your stress, you don't have to face it alone. Therapy
          offers you the time and space to work toward wellness and peace.
        </p>
      </div>
      <div
        className="lg:h-16 lg:w-[90%] lg:mt-0 lg:mx-auto mt-20"
        style={{ borderTop: "1.9px solid #9a9a84" }}
      ></div>

      <div className="area-of-focus text-center lg:mt-9 mt-20">
        <h2 className="font-serif lg:text-4xl text-[#3d3d3b] text-3xl">
          Area Of Focus
        </h2>
        <div className="lg:flex lg:flex-row lg:gap-20 lg:leading-relaxed lg:mt-20 lg:px-0 mt-20 flex flex-col px-4">
          <div className="service">
            <img
              className="src-img"
              src="/assets/claim-therapy.jpg"
              alt="image"
            />
            <h1 className="src-h1">
              Therapy for Healthcare Providers and Students
            </h1>
            <p>
              The care you provide for others may be driving you to seek
              therapy, whether due to burnout, compassion fatigue, imposter
              syndrome, people-pleasing tendencies, or perfectionism. Whether
              you're in pre-professional school, undergoing training, or
              reflecting on a long career in healthcare, we can address the
              unique stressors of your professional environment along with any
              challenges you may be facing in other areas of your life.
            </p>
          </div>
          <div className="service lg:mt-0 mt-28">
            <img
              className="src-img rounded-full"
              src="/assets/couple-therapy.jpg"
              alt="image"
            />
            <h1 className="src-h1">Therapy for Trauma and Grief</h1>
            <p>
              Life's challenges, whether a difficult childhood, a traumatic
              event or series of events, or the loss of someone or something
              deeply meaningful, can lead to profound experiences of trauma and
              grief. Therapy offers a supportive space to process these
              experiences, care for yourself amidst painful thoughts and
              emotions, and work toward a sense of grounding and meaning.
            </p>
          </div>
          <div className="service lg:mt-0 lg:mb-0 mt-28 mb-4">
            <img
              className="src-img"
              src="/assets/mental-healing.jpg"
              alt="image"
            />
            <h1 className="src-h1">
              Therapy for Second Generation Individuals In Immigrant Families
            </h1>
            <p>
              Second-generation individuals in immigrant families, born in the
              U.S. to at least one parent born abroad, often navigate the
              complexities of multiple cultures and diverse expectations. This
              experience can bring challenges such as feeling like a foreigner
              in your own country and navigating strained family relationships.
              Therapy offers a supportive space to explore and process this
              unique aspect of your identity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Service;
