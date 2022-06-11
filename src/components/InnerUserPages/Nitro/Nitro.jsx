import React from "react";

import st from "./nitro.module.css";

const Nitro = () => {
  return (
    <section className={st.nitro_section}>
      <div className={st.center_div}>
        <div className={st.first_img}>
          <button>Subscrib</button>
          <button>Gift</button>
        </div>
      </div>
    </section>
  );
};

export default Nitro;
