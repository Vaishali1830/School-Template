import Inputfield from "./Contact/InputField";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formdata, setformdata] = useState({
    firstname: "",
    email: "",
    lastname: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let isValid = true;
    if (!formdata.email.trim()) {
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
    setformdata({ firstname: "", email: "", lastname: "" });
  };

  return (
    <div className="m-10 flex flex-col items-center justify-center">
      <h1 className="text-xl text-primary font-bold font-serif">
        Sign Up Now!
      </h1>
      <p className="text-primary mt-2 text-sm">
        Get news from Precious Lamb Preschool in your inbox.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center">
        {submitted && (
          <p className="text-green-600 text-center font-semibold">
            ✅ You Signed Up successfully!
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <Inputfield
            label="E-mail"
            name="email"
            value={formdata.email}
            type="email"
            onChange={handleChange}
            required
          />
          <Inputfield
            label="First Name"
            name="firstname"
            value={formdata.firstname}
            type="text"
            onChange={handleChange}
          />
          <Inputfield
            label="Last Name"
            name="lastname"
            value={formdata.lastname}
            type="text"
            onChange={handleChange}
          />
          <p className="text-xs text-secondary w-[70vw]">
            By submitting this form, you are consenting to receive marketing
            emails from: Precious Lamb Preschool, 2005 Palo Verde Ave PMB 301,
            Long Beach, CA, 90815, US, http://www.preciouslamb.org. You can
            revoke your consent to receive emails at any time by using the
            SafeUnsubscribe® link, found at the bottom of every email. Emails
            are serviced by Constant Contact.
          </p>
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="bg-new-color text-color h-10 mr-3 rounded-lg px-4 "
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Signup;
