import React from "react";
import { Link } from "react-router-dom";
import Input from "../ReuseComp/Input";

import st from "./login.module.css";

const LogIn = () => {
  const hdSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={st.login_section}>
      <div className={st.loginDiv}>
        <form className={st.form} onSubmit={hdSubmit}>
          <h3 className="text-white">Welcome back!</h3>
          <p>We're so excited to see you again!</p>
          <Input type="email" label={"EMAIL"} />
          <Input type="password" label={"PASSWORD"} />
          <br />
          <Link to={"/login"}>Forgot Your Password?</Link>
          <button className="btn btn-primary my-2">Login</button>
          <p>
            Need An Account? <Link to={"/register"}>Register</Link>
          </p>
        </form>

        <div className={st.withQR}>
          <img
            src="https://play-lh.googleusercontent.com/9HT3x5ccHcOdhBgLVsNEE6uV9tsCy4GJkoQ8SiJid6xxdhoZnXtyIVhyFEBzoRvAjc4"
            alt=""
          />
          <h3>Log in with QR Code</h3>
          <h5>Scan this with the Discord mobile appto log in instantly.</h5>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
