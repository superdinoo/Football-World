import React from "react";
import style from "./ErrorStyle.module.css";

const Error = () => {
  return (
    <div class={style.container}>
      <h1 class={style.firstFour}>4</h1>
      <div class={style.cogWheel1}>
        <div class={style.cog1}>
          <div class={style.top}></div>
          <div class={style.down}></div>
          <div class={style.leftTop}></div>
          <div class={style.leftDown}></div>
          <div class={style.rightTop}></div>
          <div class={style.rightDown}></div>
          <div class={style.left}></div>
          <div class={style.right}></div>
        </div>
      </div>

      <div class={style.cogWheel2}>
        <div class={style.cog2}>
          <div class={style.top}></div>
          <div class={style.down}></div>
          <div class={style.leftTop}></div>
          <div class={style.leftDown}></div>
          <div class={style.rightTop}></div>
          <div class={style.rightDown}></div>
          <div class={style.left}></div>
          <div class={style.right}></div>
        </div>
      </div>
      <h1 class={style.secondFour}>4</h1>
      <p class={style.wrongPara}>Uh Oh! Page not found!</p>
    </div>
  );
};
export default Error;
