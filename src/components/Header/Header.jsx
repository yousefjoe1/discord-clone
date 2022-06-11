import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { FiArrowDownCircle } from "react-icons/fi";

import st from "./header.module.css";

const Header = () => {
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
        <button>Downlaod</button>
        <button>Nitro</button>
        <button>Safety</button>
        <button>Support</button>
        <button>Blog</button>
        <button>Careers</button>
      </div>
      <div className={st.log_reg_links}>
        <Link to={"/login"}>LogIn</Link>
        <Link to={"/register"}>Register</Link>
      </div>
    </header>
  );
};

export default Header;
