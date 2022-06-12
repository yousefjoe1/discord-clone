import React from "react";
import { Link, Outlet } from "react-router-dom";

import { RiDashboard3Line } from "react-icons/ri";
import { IoAccessibilitySharp } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import { FiFolder } from "react-icons/fi";
import { GoIssueOpened } from "react-icons/go";
import st from "./firstpage.module.css";

const FirstPage = () => {
  return (
    <section className={`${st.firstpage_section} `}>
      <div className={st.left_nav}>
        <button>Find or Start a conversation</button>

        <Link to={"/user/home/friends"}>
          <IoAccessibilitySharp /> Friends
        </Link>

        <Link to={"/user/home/nitro"}>
          <RiDashboard3Line /> Nitro
        </Link>

        <div className={st.direct_msg}>
          <p className={`text-white`}>Direct message</p>
          <div className={st.iconDiv}>
            <IoAddOutline className={`text-white ${st.icon}`} />
          </div>
        </div>
      </div>
      <div className={st.firsPage_right_nav}>
        {/*-------------------- Top (Nav) ---------------- */}
        <div className={st.right_nav_header}>
          {/* --------------- Left Nav */}
          <div className={st.leftNav}>
            <div className="friends">
              <IoAccessibilitySharp /> Friends
            </div>
            <Link to={"/user/home/online"}>Online</Link>
            <Link to={"/user/home/all"}>All</Link>
            <Link to={"/user/home/pend"}>Pending</Link>
            <Link to={"/user/home/blocked"}>Blocked</Link>
            <Link to={"/user/home/friends/"}>Add Friend</Link>
          </div>
          {/* ----------------- Right Nav */}
          <div className={st.rightNav}>
            <button className={st.addGrp}>
              <FiUserPlus />
            </button>
            <button className={st.inbox}>
              <FiFolder />
            </button>
            <button className={st.help}>
              <GoIssueOpened />
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default FirstPage;
