import React from "react";
import style from "./Layout.module.css";

let Layout = ({ id, title, desc, urlBg, colorBg }) => {
  let colorStyle = null
  if(colorBg){
    colorStyle = colorBg
  }
  return (
    <section className={style.root} id={id} style={{backgroundColor:`${colorStyle}`}}>
      <div className={style.wrapper} >
        {urlBg && <img src={urlBg} alt="background_image"/>}
        <article>
          <div className={style.title}>
            <h3>{title}</h3>
            <span className={style.separator}></span>
          </div>
          <div className={`${style.desc} ${style.full}`}>
            <p>{desc}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
