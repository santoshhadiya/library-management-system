import React from "react";

const ContactSection = () => {
  return (
    <div className="contact">
      <p>Ready to Read? Enter your email to create or restart your membership.</p>
      <div className="inputs">
        <input type="text" placeholder="Email Address" />
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default ContactSection;