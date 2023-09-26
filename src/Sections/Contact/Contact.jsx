import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7hbqr9l",
        "template_p2w1o8d",
        form.current,
        "MR95dPAd4FnNPW4e0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-section">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="contact-btn-send" type="submit" value="Send" />
      </form>
    </div>
  );
};
