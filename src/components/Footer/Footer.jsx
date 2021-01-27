import React from "react";
import style from "./Footer.module.css";

let Footer = () => {
  return (
    <footer>
      <div className={style.wrapper}>
        <h3>THANKS FOR VISITING</h3>
        <p>© 2021 #ReactMarathon.</p>
      </div>
    </footer>
  );
};

export default Footer;
