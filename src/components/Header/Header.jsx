import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import st from "./header.module.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={`${st.header}`}>
      {/* <div className={st.nav_icon}>
        <FiArrowDownCircle onClick={showNav} />
      </div> */}
      <Link to={"/"} className={st.logo}>
        <img
          src="https://1000logos.net/wp-content/uploads/2021/06/Discord-logo.png"
          alt=""
        />
      </Link>
      <div className={st.links}>
        <button onClick={() => navigate("/login")}>Downlaod</button>
        <button onClick={() => navigate("/login")}>Nitro</button>
        <button onClick={() => navigate("/login")}>Safety</button>
        <button onClick={() => navigate("/login")}>Support</button>
        <button onClick={() => navigate("/login")}>Blog</button>
        <button onClick={() => navigate("/login")}>Careers</button>
      </div>
      <div className={st.log_reg_links}>
        <Link to={"/login"}>LogIn</Link>
        <Link to={"/register"}>Register</Link>
      </div>
    </header>
  );
};

export default Header;
