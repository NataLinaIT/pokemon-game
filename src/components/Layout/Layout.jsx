import React from "react";
import style from "./Layout.module.css";

let Layout = ({ id, title,  urlBg, colorBg, children }) => {
  let bgStyle = null;
  if (urlBg) {
    bgStyle = {
      backgroundImage: `url(${urlBg})`,
      backgroundSize: "100%",
    };
  }
  if (colorBg) {
    bgStyle = {
      backgroundColor: `${colorBg}`,
    };
  }
  return (
    <section className={style.root} id={id} style={bgStyle}>
      <div className={style.wrapper}>
        <article>
          <div className={style.title}>
            <h3>{title}</h3>
            <span className={style.separator}></span>
          </div>
          <div className={`${style.desc} ${style.full}`}>
            {children}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
