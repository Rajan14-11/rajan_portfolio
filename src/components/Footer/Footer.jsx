import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Rajan Goyal. I am a Frontend Developer and learning
          full stack development.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Me</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/rajan14-11/" target="black">
          <BsGithub />
        </a>
        <a href="https://wa.me/7652932128" target="black">
          <BsWhatsapp />
        </a>
        <a href="https://instagram.com/rajangoyal740/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/rajan-goyal/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
