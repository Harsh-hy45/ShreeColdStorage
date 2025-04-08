import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../assets/css/discussForm.module.css";

const DiscussForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateFields = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Valid email is required.";
      isValid = false;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = "Valid phone number is required.";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFields()) {
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      to_email: "info.shreecoldstorage@gmail.com",
    };

    emailjs
      .send(
        "service_96jkrfm",
        "template_7r7ecr1",
        templateParams,
        "oh6UFNtUwQuv1LC88"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      })
      .catch(() => toast.error("Failed to send message. Try again!"));
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Contact Us</h2>
      <form onSubmit={handleSubmit} className={styles.formGrid}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          onChange={handleChange}
          className={styles.inputField}
        />
        {errors.name && <span className={styles.errorText}>{errors.name}</span>}

        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="example@email.com"
          onChange={handleChange}
          className={styles.inputField}
        />
        {errors.email && (
          <span className={styles.errorText}>{errors.email}</span>
        )}

        {/* Phone Input with Country Code */}
        <PhoneInput
          country={"in"} // Default country (India)
          value={formData.phone}
          onChange={handlePhoneChange}
          inputProps={{
            name: "phone",
            required: true,
            className: styles.inputField,
            placeholder: "+91 XXXXX XXXXX",
          }}
        />
        {errors.phone && (
          <span className={styles.errorText}>{errors.phone}</span>
        )}

        <textarea
          name="message"
          value={formData.message}
          placeholder="Your Message"
          onChange={handleChange}
          className={styles.textArea}
          maxLength={500}
        />
        {errors.message && (
          <span className={styles.errorText}>{errors.message}</span>
        )}

        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default DiscussForm;
