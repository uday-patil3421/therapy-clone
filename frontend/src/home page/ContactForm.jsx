import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    if (!formData.email.includes("@"))
      newErrors.email = "Valid email is required.";
    if (!formData.message.trim())
      newErrors.message = "Please enter your message.";
    if (!formData.preferredTime.trim())
      newErrors.preferredTime = "Preferred time is required.";
    if (!formData.agree) newErrors.agree = "You must agree to be contacted.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
      console.log("Submitted data:", formData);
    }
  };

  return (
    <div className="bg-white py-4">
      <h1 className="lg:pt-6 lg:mx-[40%] lg:w-[25%] font-extralight font-serif text-2xl text-[#515050] mx-12">
        Book a Free Consultation
      </h1>
      <form
        onSubmit={handleSubmit}
        className="lg:max-w-xl mx-auto lg:px-8 lg:pb-6 lg:mb-8 lg:shadow-xl font-serif bg-white rounded-md p-4 shadow-lg"
      >
        <div className="mb-4">
          <label className="block font-medium mb-1 text-[#52524a]">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-1.5 border rounded-lg focus:outline-blue-100"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1 text-[#52524a]">Phone</label>
          <input
            type="number"
            name="phone"
            className="w-full border p-1.5 rounded-lg focus:outline-blue-100"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1 text-[#52524a]">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border p-1.5 rounded-lg focus:outline-blue-100"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1 text-[#52524a]">
            What brings you here?
          </label>
          <textarea
            name="message"
            className="w-full border p-1.5 rounded-lg focus:outline-blue-100"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1 text-[#52524a]">
            Preferred time to reach you
          </label>
          <input
            type="text"
            name="preferredTime"
            className="w-full border p-1.5 rounded-lg focus:outline-blue-100"
            value={formData.preferredTime}
            onChange={handleChange}
          />
          {errors.preferredTime && (
            <p className="text-red-500 text-sm">{errors.preferredTime}</p>
          )}
        </div>

        <div className="mb-4 flex items-start gap-2">
          <input
            className="size-4 my-auto"
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <label className="text-md text-[#52524a]">
            I agree to be contacted
          </label>
        </div>
        {errors.agree && (
          <p className="text-red-500 text-sm mb-2">{errors.agree}</p>
        )}

        <button
          type="submit"
          className=" bg-blue-600 text-white px-6 py-1 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
