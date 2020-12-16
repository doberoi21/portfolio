import React from "react";

const Contactme = () => {
  return (
    <div className="container-first">
      <h3>CONTACT</h3>
      <p>
        Interested in hiring me for your project or just want to say hi? You can
        fill in the contact form below or send me
        <br /> an email to contactdiv01@gmail.com
      </p>
      <p>Want to get connected? Follow me on the social channels below.</p>
      <div>Icons</div>
      <div>
        <h3>GET IN TOUCH</h3>
        <div>
          <form>
            <div className="fields">
              <label>Name</label>
              <div>
                <div class="field">
                  <input
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div class="field">
                  <input
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
