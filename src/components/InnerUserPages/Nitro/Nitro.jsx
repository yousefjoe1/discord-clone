import React from "react";

import st from "./nitro.module.css";

import { ImUserCheck } from "react-icons/im";
import { GoGift } from "react-icons/go";

const Nitro = () => {
  return (
    <section className={st.nitro_section}>
      <div className={st.center_div}>
        <div className={st.first_img}>
          <h4>Make Discored Yours</h4>
          <button>
            <ImUserCheck />
            Subscrib
          </button>
          <button>
            <GoGift /> Gift
          </button>
        </div>
        <h5 className="text-white m-3">Here is what you get with Nitro:</h5>
        <div className={st.cards}>
          <div className={`card`} style={{ width: "12rem" }}>
            <div className="card-body bg-dark text-white">
              <h5 className="card-title">Multipile Profile</h5>
            </div>
            <img
              src="https://wallpaper.dog/large/5548941.jpg"
              className="card-img-bottom"
              alt="..."
            />
          </div>
          <div className={`card`} style={{ width: "12rem" }}>
            <div className="card-body bg-dark text-white">
              <h5 className="card-title">More backgrounds</h5>
            </div>
            <img
              src="https://wallpaper.dog/large/5548941.jpg"
              className="card-img-bottom"
              alt="..."
            />
          </div>
          <div className={`card`} style={{ width: "12rem" }}>
            <div className="card-body bg-dark text-white">
              <h5 className="card-title">Style Your Profile</h5>
            </div>
            <img
              src="https://wallpaper.dog/large/5548941.jpg"
              className="card-img-bottom"
              alt="..."
            />
          </div>
          <div className={`card`} style={{ width: "12rem" }}>
            <div className="card-body bg-dark text-white">
              <h5 className="card-title">Lorem, ipsum.</h5>
            </div>
            <img
              src="https://wallpaper.dog/large/5548941.jpg"
              className="card-img-bottom"
              alt="..."
            />
          </div>
          <div className={`card`} style={{ width: "12rem" }}>
            <div className="card-body bg-dark text-white">
              <h5 className="card-title">Lorem, ipsum.</h5>
            </div>
            <img
              src="https://wallpaper.dog/large/5548941.jpg"
              className="card-img-bottom"
              alt="..."
            />
          </div>
          <div className={`card`} style={{ width: "12rem" }}>
            <div className="card-body bg-dark text-white">
              <h5 className="card-title">Lorem, ipsum.</h5>
            </div>
            <img
              src="https://wallpaper.dog/large/5548941.jpg"
              className="card-img-bottom"
              alt="..."
            />
          </div>
        </div>
        <div className={st.upgNitro}>
          <h5>Ready To Upgrade To Nitro?</h5>
          <p>
            Pick the plane that works best for you and start your emoji
            collection
          </p>
          <button className={st.subscrib}>
            <ImUserCheck />
            Subscrib
          </button>
          <button className={st.gift}>
            <GoGift /> Gift
          </button>
        </div>
        <br />
      </div>
    </section>
  );
};

export default Nitro;
