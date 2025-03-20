import { useState } from "react";
import Inputfield from "./InputField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

  const [submitted, setSubmitted] = useState(false);

  const [formdata, setformdata] = useState({
    firstname: "",
    email: "",
    phone: "",
    alternatephobe : "",
    description: "",
  });


  const validateForm = () => {
    let isValid = true;
    if (
      !formdata.firstname.trim() ||
      !formdata.email.trim() ||
      !formdata.phone.trim() ||
      !formdata.description.trim()
    ) {
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill all required fields!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); 
    setformdata({ firstname: "", email: "", phone: "", description: "" , alternatephobe : ""});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-lime h-[20vh] w-full flex justify-center items-center">
        <h1 className="text-4xl text-color font-bold font-serif">
          Get In Touch
        </h1>
      </div>

      <div className="m-8">
      {submitted && (
          <p className="text-green-600 text-center font-semibold">
            ✅ Your message has been sent successfully!
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Inputfield
            label="Name"
            name="firstname"
            value={formdata.firstname}
            type="string"
            onChange={handleChange}
            required
          />
          <Inputfield
            label="E-mail"
            name="email"
            value={formdata.email}
            type="email"
            onChange={handleChange}
            required
          />
          <Inputfield
            label="Phone"
            name="phone"
            value={formdata.phone}
            type="string"
            onChange={handleChange}
            required
          />
          <Inputfield
            label="Alternate Phone"
            name="phone"
            value={formdata.alternatephobe}
            type="string"
            onChange={handleChange}
          />
          <label className="inline text-secondary text-sm font-medium ml-3">
            Description <span className="error-color">*</span>
            <br />
            <textarea
              name="description"
              value={formdata.description}
              onChange={handleChange}
              placeholder="Write description..."
              className="border border-color rounded-md p-2 mt-3 ml-2 w-88 md:w-[38vw] focus:outline-0"
            />
          </label>

          <div className="flex justify-center mt-3">
            <button
              type="submit"
              className="bg-new-color text-color h-10 mr-3 rounded-lg px-4 "
            >
              CONTACT
            </button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Contact;
