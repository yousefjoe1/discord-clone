import React from "react";

import st from "./friends.module.css";

const Friends = () => {
  return (
    <section className={st.friends_section}>
      <div className={st.frinedsDiv}>
        <h4>Add Friends</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
          consequuntur.
        </p>
        <div className={st.add_input}>
          <input placeholder="Enter a user name#00000" type="text" />
          <button>Send Friend Request</button>
        </div>
      </div>

      <div className={st.active_friends}>
        <h4>Active Now</h4>
        <h5>It's quiet for now...</h5>
        <p>No friends are active now</p>
      </div>
    </section>
  );
};

export default Friends;
