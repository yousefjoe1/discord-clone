import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import st from "./userhome.module.css";

import { ImPlus } from "react-icons/im";
import { Button, Modal } from "react-bootstrap";
import { VscChromeClose } from "react-icons/vsc";
import { FcGlobe } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

const UserHome = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className={st.userSection}>
      <div className={st.leftSide}>
        <p className="text-white p-1">Discored</p>
        <div className={st.servers}>
          <Link to={"/user/home/friends"} className={st.userhome_link}></Link>
          <Link to={"/user/server1"} className={st.server1}></Link>
          {/*----------------- Add Server Modal------------------- */}
          <button
            variant="primary"
            onClick={handleShow}
            className={st.addserver}
          >
            <ImPlus />
          </button>
          <Modal
            show={show}
            className={st.modal_container}
            onHide={handleClose}
          >
            <div className={st.innermodal}>
              <Modal.Header>
                <Modal.Title>Create a Server</Modal.Title>
              </Modal.Header>
              <br />
              {/* <br /> */}
              <p>Your server is where you and your friend hang out.</p>
              <Modal.Body>
                <div className={st.modal_links}>
                  <Link to={"/user/home/friends"}>
                    <span>
                      <FcGlobe style={{ fontSize: "30px" }} /> Create My Own
                    </span>
                    <FcNext />
                  </Link>
                  <Link to={"/user/home/friends"}>
                    {" "}
                    <span>
                      {" "}
                      <img
                        src="https://thedailycougar.com/wp-content/uploads/2022/04/print_Opinion_Video-Game-workers-need-Unions_juana-garcia-1-620x413.png"
                        alt=""
                      />{" "}
                      Gaming
                    </span>{" "}
                    <FcNext />
                  </Link>
                  <Link to={"/user/home/friends"}>
                    <span>
                      <img
                        src="https://leslie.salkeiz.k12.or.us/wp-content/uploads/sites/6/2021/04/School-Club-Red.jpg"
                        alt=""
                      />
                      School club
                    </span>
                    <FcNext />
                  </Link>
                  <Link to={"/user/home/friends"}>Study Group</Link>
                  <Link to={"/user/home/friends"}>Friends</Link>
                  <Link to={"/user/home/friends"}>Artist&Creators</Link>
                  <Link to={"/user/home/friends"}>Local Community</Link>
                </div>
              </Modal.Body>
            </div>
            <Button variant="secondary" onClick={handleClose}>
              <VscChromeClose />
            </Button>
          </Modal>
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
