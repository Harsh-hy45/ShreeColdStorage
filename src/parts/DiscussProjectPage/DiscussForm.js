import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import * as emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // For phone input style
import { isEmail } from "validator"; // Email validation

import { Form } from "elements/Form";
import Button from "elements/Button";

export const DiscussForm = (actions) => {
  const { data, resetForm } = actions;
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  const validateFields = () => {
    let isValid = true;
    let newErrors = {};

    // Email validation
    if (data.email && !isEmail(data.email)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }

    const phoneDigits = phone.startsWith("+91") ? phone.slice(3) : phone;
    if (phoneDigits.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitEmail = () => {
    const { name, company, email, projectIdea } = data;

    const fromEmail = email !== "" ? email : "noreply@shreecoldstore.com";
    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${fromEmail} )`,
      to_name: "Shree Cold Storage",
      message: projectIdea,
      reply_to: fromEmail,
    };

    if (
      name !== "" &&
      company !== "" &&
      phone !== "" &&
      projectIdea !== "" &&
      validateFields()
    ) {
      emailjs
        .send(
          "service_h4gtndg",
          "template_a9tvs7a",
          {
            ...templateParams,
            to_email_1: "harshchoudhary0345@gmail.com",
            to_email_2: "info@shreecoldstore.com",
          },
          "user_csqIxzN5mKsl1yw4ffJzV"
        )
        .then(
          () => {
            toast.success(
              "Success! Your message has been sent to Shree Cold Storage."
            );
            resetForm();
            setPhone("");
            setErrors({});
          },
          (error) => {
            toast.error("Error sending message. Please try again.");
          }
        );
    } else {
      setShowErrors(true);
      toast.error("Please fill out all required fields correctly.");
    }
  };

  const handleInputChange = (e) => {
    actions.onChange(e);
    setShowErrors(false); // Reset errors on input change
  };

  return (
    <section className="flex flex-col container mx-auto mt-10 justify-center">
      <Fade direction="down" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold">
          Let's Discuss
        </h1>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12">
          Please fill out the form below to discuss your project and we'll get
          back to you in less than 24 hours.
        </p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col sm:flex-row mx-auto space-y-6 sm:space-y-0 sm:space-x-6">
            <div className="flex flex-col">
              <Form
                id="name"
                name="name"
                type="text"
                value={data.name}
                placeholder="Your name"
                className="border-2 border-gray-300 rounded-lg px-4 py-2"
                onChange={handleInputChange}
                required
              />
              {showErrors && !data.name && (
                <p className="text-red-500 text-sm mt-1">* Name is required</p>
              )}
            </div>
            <div className="flex flex-col">
              <Form
                id="company"
                name="company"
                type="text"
                value={data.company}
                placeholder="Your company"
                className="border-2 border-gray-300 rounded-lg px-4 py-2"
                onChange={handleInputChange}
                required
              />
              {showErrors && !data.company && (
                <p className="text-red-500 text-sm mt-1">
                  * Company is required
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mx-auto space-y-6 sm:space-y-0 sm:space-x-6">
            <div className="flex flex-col">
              <Form
                id="email"
                name="email"
                type="email"
                value={data.email}
                placeholder="Your email address"
                className="border-2 border-gray-300 rounded-lg px-4 py-2"
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">* {errors.email}</p>
              )}
            </div>
            <div className="flex flex-col">
              <PhoneInput
                country={"in"}
                value={phone}
                onChange={setPhone}
                inputProps={{
                  name: "phone",
                  required: true,
                  placeholder: "Your contact number",
                }}
                containerClass="border-2 border-gray-300 rounded-lg"
                inputStyle={{
                  width: "100%",
                  borderRadius: "8px",
                  padding: "10px",
                }}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">* {errors.phone}</p>
              )}
            </div>
          </div>

          <div className="mx-auto w-full sm:w-3/4">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Explain your project idea"
              className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full"
              onChange={handleInputChange}
              required
            />
            {showErrors && !data.projectIdea && (
              <p className="text-red-500 text-sm mt-1">
                * Project idea is required
              </p>
            )}
          </div>

          <Button
            className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200 focus:outline-none"
            type="button"
            onClick={submitEmail}
          >
            Submit
          </Button>
        </div>
      </Fade>

      <ToastContainer />
    </section>
  );
};
