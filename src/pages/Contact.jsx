import React from "react";

const Contact = () => {
  return (
    // <div className="container my-5">
    //   <form className="row g-3">
    //     <div className="col-md-4">
    //       <label htmlFor="validationDefault01" className="form-label">
    //         First name
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="validationDefault01"
    //         required
    //       />
    //     </div>
    //     <div className="col-md-4">
    //       <label htmlFor="validationDefault02" className="form-label">
    //         Last name
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="validationDefault02"
    //         required
    //       />
    //     </div>
    //     <div className="col-md-4">
    //       <label htmlFor="validationDefaultUsername" className="form-label">
    //         Username
    //       </label>
    //       <div className="input-group">
    //         <span className="input-group-text" id="inputGroupPrepend2">
    //           @
    //         </span>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="validationDefaultUsername"
    //           aria-describedby="inputGroupPrepend2"
    //           required
    //         />
    //       </div>
    //     </div>
    //     <div className="col-md-6">
    //       <label htmlFor="validationDefault03" className="form-label">
    //         City
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="validationDefault03"
    //         required
    //       />
    //     </div>
    //     <div className="col-md-3">
    //       <label htmlFor="validationDefault04" className="form-label">
    //         State
    //       </label>
    //       <select className="form-select" id="validationDefault04" required>
    //         <option selected disabled value>
    //           Choose...
    //         </option>
    //         <option>Gujarat</option>
    //         <option>Surat</option>
    //         <option>Kutch</option>
    //         <option>Baroda</option>
    //         <option>Rajkot</option>
    //       </select>
    //     </div>
    //     <div className="col-md-3">
    //       <label htmlFor="validationDefault05" className="form-label">
    //         Zip
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="validationDefault05"
    //         required
    //       />
    //     </div>
    //     <div className="col-12">
    //       <div className="form-check">
    //         <input
    //           className="form-check-input"
    //           type="checkbox"
    //           defaultValue
    //           id="invalidCheck2"
    //           required
    //         />
    //         <label className="form-check-label" htmlFor="invalidCheck2">
    //           Agree to terms and conditions
    //         </label>
    //       </div>
    //     </div>
    //     <div className="col-12">
    //       <button className="btn btn-primary" type="submit">
    //         Submit form
    //       </button>
    //     </div>
    //   </form>
    // </div>
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
