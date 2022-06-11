import React from "react";
import Header from "../Header/Header";

import st from "./hero.module.css";

const HeroSection = () => {
  return (
    <>
      <Header />
      <section className={st.hero_section}>
        <div className={st.hero}>
          <h1>IMAGINE A PLACE...</h1>
          <h5>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </h5>
          <div className={st.hero_btns}>
            <button>Download for Windows</button>
            <button className="btn-dark">Open Discord in your browser</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
