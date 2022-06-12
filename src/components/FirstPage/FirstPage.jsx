import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { RiDashboard3Line } from "react-icons/ri";
import { IoAccessibilitySharp } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import { FiFolder } from "react-icons/fi";
import { GoIssueOpened } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";

import { BsMicFill, BsMicMuteFill } from "react-icons/bs";
import { IoVolumeMedium, IoVolumeMute } from "react-icons/io5";

import st from "./firstpage.module.css";

const FirstPage = () => {
  const [addgrp, setAddgrp] = useState(false);

  const [mike, setMike] = useState(false);
  const [speaker, setSpeaker] = useState(false);

  const addGroubMd = () => {
    setAddgrp(!addgrp);
  };

  const muteFunc = () => {
    setMike(!mike);
  };

  const speakerFunc = () => {
    setSpeaker(!speaker);
  };

  const userStateMenu = () => {
    console.log("user menu");
  };

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

        <div className={st.bottom_user_state}>
          <button className={st.user_state}></button>
          <button className={st.user_name}>Youssef Mahmoud</button>
          <div className={st.user_icons}>
            <button onClick={muteFunc} className={st.mike_icon}>
              {mike ? <BsMicFill /> : <BsMicMuteFill />}
            </button>
            <button onClick={speakerFunc} className={st.speaker}>
              {speaker ? <IoVolumeMedium /> : <IoVolumeMute />}
            </button>
            <button onClick={userStateMenu} className={st.user_state_menu}>
              <HiDotsVertical />
            </button>
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
            {addgrp && (
              <div className={st.selectFr}>
                <button onClick={() => setAddgrp(!addgrp)}>X</button>
                <h5>Select Friend</h5>
                <img
                  className={st.noFrImg}
                  src="https://socialself.com/wp-content/uploads/2018/12/Kopia-av-Kopia-av-2018-best-posts.png"
                  alt=""
                />
                <p>You do not have any friends to add!</p>
                <Link
                  onClick={() => setAddgrp(!addgrp)}
                  className={st.addFrd}
                  to={"/user/home/friends/"}
                >
                  Add a friend
                </Link>
              </div>
            )}
            <button onClick={addGroubMd} className={st.addGrp}>
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
