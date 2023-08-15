import React from "react";
import { MdLocationPin, MdEmail, MdAccessTime } from "react-icons/md";

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
            <p>kcpmenggala@gmail.co.id</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-item_icon">
            <MdAccessTime />
          </div>
          <div className="contact-item_text">
            <h5>Jam Operasional</h5>
            <p>(08.00-15.00)</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactBox;
