import React from 'react'
import { BiLogoGmail, BiLogoGithub, BiLogoBehance, BiLogoLinkedin } from "react-icons/bi";
import "../styles/footer.css";

function Footer() {
  return (
    <div class="wrapper">
    <footer class="footer">
        <div>
        <div class="row">
        <a href="mailto:maiamanhoon@gmail.com"><BiLogoGmail /></a>
        <a href="https://github.com/AmanKumarVerma11"><BiLogoGithub /></a>
        <a href="https://www.behance.net/amannn"><BiLogoBehance /></a>
        <a href="https://www.linkedin.com/in/aman-kr-verma11/"><BiLogoLinkedin /></a>
        </div>
        <div class="row">
        || Developed By: Aman kumar Verma || 
        </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer;