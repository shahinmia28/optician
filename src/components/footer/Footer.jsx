import { useState } from "react";
import "./footer.scss";
import Form from "./Form";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="container">
          <div className="row">
            <div className="about col-md-3">
              <h1 className="text-center">Optician.</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita asperiores praesentium nam, quasi aperiam quas.
                Distinctio sed adipisci dignissimos ex corporis, fugiat nemo,
                sint earum dolore minima alias obcaecati magni?
              </p>
            </div>
            <div className="col-md-6 massage">
              <h3 className="text-center">Contact Us</h3>
              <Form />
            </div>

            <div className="col-md-3 help ">
              <h3>Help</h3>
              <ul>
                <li>
                  <span>
                    <i className="fa-solid fa-mobile-screen mx-1"></i>
                    <small> +88017 7729 6933</small>
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-envelope-open mx-1"></i>
                    <small> contact.shahinmia@gmail.com </small>
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-location-dot mx-1"></i>
                    <small> Eye Hospital gate, Bhuapur, Tangail </small>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <div className="container">
          <div className="row">
            <div className="left col-md-6 col-12">
              <p>&copy; All right are reserved by Optician.com</p>
            </div>
            <div className="right col-md-6 col-12">
              <a href="https://www.facebook.com/shahinmia28/">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
