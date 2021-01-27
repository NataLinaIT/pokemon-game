import React from 'react';
import style from "./Header.module.css"

 let Header = () => {
    return (
      <header className={style.root}>
          <div className={style.forest}></div>
          <div className={style.container}>
              <h1>This is title</h1>
              <p>This is Description!</p>
          </div>
      </header>
    )
}

export default Header;