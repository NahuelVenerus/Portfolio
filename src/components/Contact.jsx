import React from "react";
import "../styles/contactStyles.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdContactPage, MdOutlineWhatsapp } from "react-icons/md";
import Gmail_Logo from "../assets/Gmail_Logo.svg";

export const Contact = () => {
  const copyToClipboard = () => {
    const email = "nahuelvenerus@gmail.com";
    navigator.clipboard.writeText(email);
    alert("Dirección de correo copiada al portapapeles: " + email);
  };

  return (
    <div>
      <div className="inner-title">CONTACTAME</div>
      <div className="icon-container">
        <span>
          <a
            href="https://www.linkedin.com/in/nahuel-venerus/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon-wrapper linkedin">
              <AiFillLinkedin className="icon" />
              <div className="icon-text">LinkedIn</div>
            </div>
          </a>
        </span>
        <span>
          <div className="icon-wrapper gmail" onClick={copyToClipboard}>
            <img alt="gmail" src={Gmail_Logo} className="gmail-icon" />
            <div className="icon-text">Gmail</div>
          </div>
        </span>
        <span>
          <a
            href="https://www.github.com/NahuelVenerus"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon-wrapper github">
              <AiFillGithub className="icon" />
              <div style={{ color: "white" }} className="icon-text">
                Github
              </div>
            </div>
          </a>
        </span>
        <span>
          <a
            href="https://www.canva.com/design/DAFtC0ZPX7c/d2NPBcX5C4DrM2uXFSVPgw/view?website#1:espa-ol"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon-wrapper resume">
              <MdContactPage className="icon" />
              <div className="icon-text">CV</div>
            </div>
          </a>
        </span>
        <span>
          <a
            href="https://wa.me/5491136441633"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon-wrapper whatsapp">
              <MdOutlineWhatsapp className="icon" />
              <div className="icon-text">WhatsApp</div>
            </div>
          </a>
        </span>
      </div>
    </div>
  );
};
