import React from "react";
import ContactBox from "./ContactBox";

function Contact() {
  return (
    <>
      <div className="contact">
        <iframe
          title="Bank Lampung Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7955.086908158582!2d105.2390956!3d-4.4955296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3f39ec4ff33021%3A0xaca1f7fdbab41614!2sBank%20Lampung%20Menggala!5e0!3m2!1sid!2sid!4v1690426397041!5m2!1sid!2sid"
          width="100%"
          height="450"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <ContactBox />
      </div>
    </>
  );
}

export default Contact;
