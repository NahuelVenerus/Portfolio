import React from "react";
import "../styles/contactStyles.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {
  MdContactPage,
  MdOutlineWhatsapp,
  MdOutlinePhone,
} from "react-icons/md";
import Gmail_Logo from "../assets/Gmail_Logo.svg";
import Swal from "sweetalert2";
import { exportDictionary } from "../dictionary";

export const Contact = ({ lang: lang }) => {
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
      title: `Copiado </br><div style="color: ${color};">${toShare}</div></br> correctamente al portapapeles!`,
      confirmButtonText: `Genial!`,
    });
  };

  return (
    <>
      <h1 className="inner-title">{exportDictionary(lang, "contact")}</h1>
      <div className="icon-container" >
        <a className="icon-wrapper linkedin"
          href="https://www.linkedin.com/in/nahuel-venerus/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="contact-icon" />
          <span className="icon-text">LinkedIn</span>
        </a>
          <div
            className="icon-wrapper gmail"
            onClick={() => copyToClipboard(true)}
          >
            <img alt="gmail" src={Gmail_Logo} className="gmail-icon" />
            <span className="icon-text">Gmail</span>
          </div>
          <a className="icon-wrapper github"
            href="https://www.github.com/NahuelVenerus"
            target="_blank"
            rel="noreferrer"
          >
              <AiFillGithub className="contact-icon" />
              <span style={{ color: "white" }} className="icon-text">
                Github
              </span>
          </a>
          <a className="icon-wrapper resume"
            href="https://www.canva.com/design/DAFtC0ZPX7c/d2NPBcX5C4DrM2uXFSVPgw/view?website#1:espa-ol"
            target="_blank"
            rel="noreferrer"
          >
              <MdContactPage className="contact-icon" />
              <span className="icon-text">CV</span>
          </a>
          <a className="icon-wrapper whatsapp"
            href="https://wa.me/5491136441633"
            target="_blank"
            rel="noreferrer"
          >
              <MdOutlineWhatsapp className="contact-icon" />
              <span className="icon-text">WhatsApp</span>
          </a>
          <div
            className="icon-wrapper phone"
            onClick={() => copyToClipboard(false)}
          >
            <MdOutlinePhone className="contact-icon" />
            <span className="icon-text">Número</span>
          </div>
      </div>
    </>
  );
};

{/* <div className="icon-container" >
        <div>
          <a
            href="https://www.linkedin.com/in/nahuel-venerus/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon-wrapper linkedin">
              <AiFillLinkedin className="contact-icon" />
              <span className="icon-text">LinkedIn</span>
            </div>
          </a>
        </div>
        <div>
          <div
            className="icon-wrapper gmail"
            onClick={() => copyToClipboard(true)}
          >
            <img alt="gmail" src={Gmail_Logo} className="gmail-icon" />
            <span className="icon-text">Gmail</span>
          </div>
        </div>
        <div>
          <a
            href="https://www.github.com/NahuelVenerus"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon-wrapper github">
              <AiFillGithub className="contact-icon" />
              <span style={{ color: "white" }} className="icon-text">
                Github
              </span>
            </div>
          </a>
        </div>
        <div>
          <a
            href="https://www.canva.com/design/DAFtC0ZPX7c/d2NPBcX5C4DrM2uXFSVPgw/view?website#1:espa-ol"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon-wrapper resume">
              <MdContactPage className="contact-icon" />
              <span className="icon-text">CV</span>
            </div>
          </a>
        </div>
        <div>
          <a
            href="https://wa.me/5491136441633"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon-wrapper whatsapp">
              <MdOutlineWhatsapp className="contact-icon" />
              <span className="icon-text">WhatsApp</span>
            </div>
          </a>
        </div>
        <div>
          <div
            className="icon-wrapper phone"
            onClick={() => copyToClipboard(false)}
          >
            <MdOutlinePhone className="contact-icon" />
            <span className="icon-text">Número</span>
          </div>
        </div>
      </div> */}