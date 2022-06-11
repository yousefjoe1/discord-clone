import React from "react";
import { Link, Outlet } from "react-router-dom";

import st from "./userhome.module.css";

const UserHome = () => {
  return (
    <section className={st.userSection}>
      <div className={st.leftSide}>
        <div className={st.servers}>
          <Link to={"/user/home"} className={st.userhome_link}></Link>
          <Link to={"/user/server1"} className={st.server1}></Link>
        </div>
      </div>
      <div className={st.rightSide}>
        <Outlet />
      </div>
    </section>
  );
};

export default UserHome;
