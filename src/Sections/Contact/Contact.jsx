import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useTranslation } from "react-i18next";

export const ContactUs = () => {
  const form = useRef();
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const { t } = useTranslation("global");

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
          e.target.reset();
          setIsSuccess(true);
          setPopupMessage("Email sent successfully!");
          setPopupVisible(true);
        },
        (error) => {
          console.log(error.text);
          setIsSuccess(false);
          setPopupMessage("Failed to send email.");
          setPopupVisible(true);
        }
      );
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="contact-section">
      <h1 className="contact-title">{t("Contact-title")}</h1>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label>{t("Contact-name")}</label>
        <input type="text" name="user_name" required />
        <label>{t("Contact-email")}</label>
        <input type="email" name="user_email" required />
        <label>{t("Contact-message")}</label>
        <textarea name="message" required />
        <input className="contact-btn-send" type="submit" value="Send" />
      </form>
      {isPopupVisible && (
        <div className="overlay-popup">
          <div className="popup-content">
            <div className="close-btn-body">
                <p className={`popup-message ${isSuccess ? "success" : "error"}`}>
              {popupMessage}
            </p>
              <button className="close-popup" onClick={closePopup}>
                &times;
              </button>
             
            </div>
           
          </div>
        </div>
      )}
    </div>
  );
};
