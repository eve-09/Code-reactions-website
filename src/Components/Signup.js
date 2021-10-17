import React from "react";
import "../Css/Signup.css";

const Signup = () => {
  return (
    <>
      <div class="form-container" id="contact-us-form">
        <br />
        <div class="welcome">Contact Us Now!</div>
        {/* <div class="subtitle">
              Write to us to let us know
            </div> */}
        <form>
          <input
            type="text"
            placeholder="&ensp;Name"
            className="field"
            required
          ></input>
          <input
            type="email"
            placeholder="&ensp;Email"
            className="field"
            required
          ></input>
          <input
            type="text"
            placeholder="&ensp;Contact No."
            className="field"
          ></input>
          <textarea placeholder="&ensp;Type your message here"></textarea>
          <div className="send-btn">
            <input
              type="submit"
              placeholder="SEND MESSAGE"
              class="ghost-round"
            ></input>
          </div>
        </form>
        {/* <div className="send-btn">
          <button class="ghost-round full-width">Send Message</button>
        </div> */}
      </div>
    </>
  );
};

export default Signup;
