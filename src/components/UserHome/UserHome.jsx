import React from "react";
import { Link, Outlet } from "react-router-dom";

import st from "./userhome.module.css";

import { ImPlus } from "react-icons/im";

const UserHome = () => {
  return (
    <section className={st.userSection}>
      <div className={st.leftSide}>
        <p className="text-white p-1">Discored</p>
        <div className={st.servers}>
          <Link to={"/user/home/friends"} className={st.userhome_link}></Link>
          <Link to={"/user/server1"} className={st.server1}></Link>
          <div className={st.addserver}>
            <ImPlus />
          </div>
          <Link to={"/"} className={st.home}>
            Exit
          </Link>
        </div>
      </div>
      <div className={st.rightSide}>
        <Outlet />
      </div>
    </section>
  );
};

export default UserHome;
