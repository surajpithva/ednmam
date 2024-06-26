import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div>
        <h1>Contact Us</h1>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7946056189753!2d72.56637841107086!3d23.031312515914788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e854310b186e9%3A0xc2ff10907f8de50c!2sUptake%20Infotech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1712819942928!5m2!1sen!2sin"
            style={{ width: "100%", height: 350 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <br />
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="form-name">Name</label>
              <input
                type="email"
                className="form-control"
                id="form-name"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="form-email">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="form-email"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="form-subject">Telephone</label>
              <input
                type="text"
                className="form-control"
                id="form-subject"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <label htmlFor="form-message">Email your Message</label>
              <textarea
                className="form-control"
                id="form-message"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <button className="btn btn-primary mt-4" type="submit">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
