import React from "react";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";

function ContactBox() {
  return (
    <>
      <div className="contact-box">
        <div className="contact-item">
          <div className="contact-item_icon">
            <MdLocationPin />
          </div>
          <div className="contact-item_text">
            <h5>Lokasi</h5>
            <p>
              Menggala Sel., Menggala,
              <br /> Kabupaten Tulangbawang, Lampung
            </p>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-item_icon">
            <MdEmail />
          </div>
          <div className="contact-item_text">
            <h5>Email</h5>
            <p>komunikasi@banklampung.co.id</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-item_icon">
            <HiPhone />
          </div>
          <div className="contact-item_text">
            <h5>Call Center</h5>
            <p>1500575</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactBox;
