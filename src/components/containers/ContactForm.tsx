"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_REAP_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_REAP_EMAILJS_TEMPLATE_ID!,
        {
          to_name: "Sai Tej",
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_REAP_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }
  };

  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div className="contact__map fade-top">
                    <iframe
                      src="https://maps.google.com/maps?width=660&amp;height=800&amp;hl=en&amp;q=hyderabad&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      width="100"
                      height="800"
                      style={{ border: "0px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="contact-main__form fade-top">
                    <h3>Leave A Message</h3>
                    <form
                      onSubmit={handleSubmit}
                      className="section__content-cta"
                    >
                      <div className="group-wrapper">
                        <div className="group-input ">
                          <input
                            type="text"
                            name="name"
                            id="contactName"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="group-input ">
                          <input
                            type="email"
                            name="email"
                            id="contactEmail"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="group-input drt">
                        <select
                          className="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Subject</option>
                          <option value="Account">Account</option>
                          <option value="Service">Service</option>
                          <option value="Pricing">Pricing</option>
                          <option value="Support">Support</option>
                        </select>
                      </div>
                      <div className="group-input ">
                        <textarea
                          name="message"
                          id="contactMessage"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <div className="form-cta justify-content-start">
                        <button
                          type="submit"
                          className="btn btn--primary"
                          disabled={status === "sending"}
                        >
                          {status === "sending" ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </form>
                    {status === "success" && (
                      <p className="mt-4 text-green-600">
                        Your message has been sent successfully!
                      </p>
                    )}
                    {status === "error" && (
                      <p className="mt-4 text-red-600">
                        There was an error sending your message. Please try
                        again.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
