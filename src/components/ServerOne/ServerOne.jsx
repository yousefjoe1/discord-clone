import React, { useEffect, useState } from "react";

import st from "./serverone.module.css";

const ServerOne = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const fetching = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await fetching.json();

    setUsers(res);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className={st.server_section}>
      <div className={st.users_container}>
        {users?.map((user) => (
          <div key={user.id}>
            <h5>{user.name}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServerOne;
