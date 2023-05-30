import React from "react";
import { Link } from "react-router-dom";
import style from "./Error403.module.css";

const Error403 = () => {
  return (
    <div className={style.errormain}>
      <p className={style.errortext}>В данный момент данные не доступны.</p>
      <Link to="/">
        <button className={style.errorbutton}>Вернуться</button>
      </Link>
    </div>
  );
};
export default Error403;
