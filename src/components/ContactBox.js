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
            <p>banklampung@xxxx.com</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-item_icon">
            <HiPhone />
          </div>
          <div className="contact-item_text">
            <h5>Telepon</h5>
            <p>07xx-xxx-xxx</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactBox;
