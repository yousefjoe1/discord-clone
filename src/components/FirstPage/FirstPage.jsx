import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./userstateStyle.css";

import { RiDashboard3Line } from "react-icons/ri";
import { IoAccessibilitySharp } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import { FiFolder } from "react-icons/fi";
import { GoIssueOpened } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosRadioButtonOff } from "react-icons/io";

import { BsMicFill, BsMicMuteFill } from "react-icons/bs";
import { IoVolumeMedium, IoVolumeMute } from "react-icons/io5";
import { WiMoonWaxingCrescent4 } from "react-icons/wi";
import { FcCancel } from "react-icons/fc";
import { SiCanonical } from "react-icons/si";

import st from "./firstpage.module.css";

const FirstPage = () => {
  const [addgrp, setAddgrp] = useState(false);

  const [bigCircl, setBigCircl] = useState("");
  const [smallCircl, setSmallCircl] = useState("");

  const [mike, setMike] = useState(false);
  const [speaker, setSpeaker] = useState(false);

  const [menuTrue, setMenuTrue] = useState(true);

  const addGroubMd = () => {
    setAddgrp(!addgrp);
  };

  const userStateMenu = () => {
    console.log("user menu");
  };

  const userStateFunc = (state) => {
    if (state == "online") {
      setBigCircl("");
      setSmallCircl("");
    }

    if (state == "idle") {
      setBigCircl("idl_big_circl");
      setSmallCircl("idl_small_circl");
    }

    if (state == "disturb") {
      setBigCircl("disturb_big_Circl");
      setSmallCircl("disturb_small_Circl");
    }

    if (state == "invisible") {
      setBigCircl("invisible_big_Circl");
      setSmallCircl("invisible_small_Circl");
    }
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
          {menuTrue && (
            <div className={`${st.menu} menu`}>
              <button
                onClick={() => userStateFunc("online")}
                className="online"
              >
                Online <IoIosRadioButtonOff className="online-icon" />
              </button>
              <button onClick={() => userStateFunc("idle")} className="idle">
                Idle <WiMoonWaxingCrescent4 className="idle-icon" />
              </button>
              <button
                onClick={() => userStateFunc("disturb")}
                className="disturb"
              >
                Do Not Disturb <FcCancel className="disturb-icon" />
              </button>
              <button
                onClick={() => userStateFunc("invisible")}
                className="invisiblestate"
              >
                Invisible <SiCanonical className="invisible-icon" />
              </button>
            </div>
          )}
          <button
            onClick={() => setMenuTrue(!menuTrue)}
            className={st.user_state}
          >
            <div className={`big_circl ${bigCircl} `}>
              <div className={`small_circl ${smallCircl} `}></div>
            </div>
          </button>

          <button className={st.user_name}>Youssef Mahmoud</button>

          <div className={st.user_icons}>
            <button onClick={() => setMike(!mike)} className={st.mike_icon}>
              {mike ? <BsMicFill /> : <BsMicMuteFill />}
            </button>
            <button onClick={() => setSpeaker(!speaker)} className={st.speaker}>
              {speaker ? <IoVolumeMedium /> : <IoVolumeMute />}
            </button>
            <button onClick={userStateMenu} className={st.sittings}>
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
