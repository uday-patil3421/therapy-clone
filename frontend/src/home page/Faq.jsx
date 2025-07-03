import { useState } from "react";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long are the therapy sessions?",
      answer:
        "Each individual or couples session lasts approximately 50 minutes.",
    },
    {
      question: "Do you offer evening or weekend appointments?",
      answer:
        "Currently, sessions are available Monday to Friday during listed office hours only.",
    },
    {
      question: " Is everything we discuss confidential?",
      answer:
        " Yes. All sessions are strictly confidential, in line with HIPAA and ethical guidelines.",
    },
    {
      question: "Can I switch between in-person and virtual sessions?",
      answer:
        "Absolutely, you can alternate based on your convenience and comfort.",
    },
  ];

  return (
    <div className="lg:p-12 w-auto bg-stone-50 lg:mt-8  lg:mx-0 p-4">
      <h2 className="faq-h2 text-2xl text-center mb-6 pt-6">
        Frequently Asked Questions.
      </h2>

      {faqs.map((item, index) => (
        <div key={index} className="mb-4 border-b">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left py-2 font-serif text-base flex justify-between"
          >
            {item.question}
            <span>{openIndex === index ? "-" : "+"}</span>
          </button>

          {openIndex === index && (
            <p className="text-[#52524a] py-2 text-base">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;
