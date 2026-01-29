import React, { useState } from "react";

const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch(() => {
        setStatus("error");
      });
  };

  const contactName = data?.name;
  const street = data?.address?.street;
  const city = data?.address?.city;
  const state = data?.address?.state;
  const zip = data?.address?.zip;
  const phone = data?.phone;
  const contactEmail = data?.email;
  const contactMessage = data?.contactmessage;

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={submitForm}
          >
          
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <fieldset>
              <div>
                <label>
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label>
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label>
                  Message <span className="required">*</span>
                </label>
                <textarea
                  rows="10"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <div>
                <button type="submit" className="submit">
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>
              </div>

              {status === "success" && (
                <div id="message-success">
                  <i className="fa fa-check"></i> Your message was sent, thank you!
                </div>
              )}

              {status === "error" && (
                <div id="message-warning">
                  Oops! Something went wrong. Try again.
                </div>
              )}
            </fieldset>
          </form>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {contactName}
              <br />
              {contactEmail}
              <br />
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
