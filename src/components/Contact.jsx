import React from "react";
import "../styles/contactStyles.css";
import { AiFillLinkedin, AiFillGithub, AiOutlineCheck } from "react-icons/ai";
import {
  MdContactPage,
  MdOutlineWhatsapp,
  MdOutlinePhone,
} from "react-icons/md";
import Gmail_Logo from "../assets/Gmail_Logo.svg";
import Swal from "sweetalert2";

export const Contact = () => {
  const copyToClipboard = (isMail) => {
    let toShare = "nahuelvenerus@gmail.com";
    let color = "red";
    if (!isMail) {
      toShare = "1136441633";
      color = "#AF64DB";
    }
    navigator.clipboard.writeText(toShare);
    Swal.fire({
      icon: "success",
      title: `Copiado </br><span style="color: ${color};">${toShare}</span></br> correctamente al portapapeles!`,
      confirmButtonText: `Genial!`,
    });
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
              <AiFillLinkedin className="contact-icon" />
              <div className="icon-text">LinkedIn</div>
            </div>
          </a>
        </span>
        <span>
          <div
            className="icon-wrapper gmail"
            onClick={() => copyToClipboard(true)}
          >
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
              <AiFillGithub className="contact-icon" />
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
              <MdContactPage className="contact-icon" />
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
              <MdOutlineWhatsapp className="contact-icon" />
              <div className="icon-text">WhatsApp</div>
            </div>
          </a>
        </span>
        <span>
          <div
            className="icon-wrapper phone"
            onClick={() => copyToClipboard(false)}
          >
            <MdOutlinePhone className="contact-icon" />
            <div className="icon-text">Número</div>
          </div>
        </span>
      </div>
    </div>
  );
};
