import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../ReuseComp/Input";

import Header from "../Header/Header";

import st from "./register.module.css";

const Register = () => {
  const navigate = useNavigate();
  const hdSubmit = (e) => {
    e.preventDefault();
    navigate("/user/home/friends");
  };

  return (
    <>
      <Header />
      <section className={st.login_section}>
        <form className={st.form} onSubmit={hdSubmit}>
          <h3 className="text-white">Create an account</h3>
          <p>We're so excited to see you again!</p>
          <Input type="email" label={"EMAIL"} />
          <Input type="text" label={"USER NAME"} />
          <Input type="password" label={"PASSWORD"} />

          <button className="btn btn-primary my-2">Continue</button>
          <p>
            Aleady have an account? <Link to={"/login"}>Login</Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default Register;
