import React, { useEffect, useState } from "react";
import UserCard from "../../components/UserCard";
import { getAllUsers } from "../../lib/lib";

function AdminHome() {
  const [users, setUsers] = useState(null);
  const [fetch, setFetch] = useState(true);
  const getUsers = async () => {
    try {
      let response = await getAllUsers();
      setUsers(response);
    } catch (err) {
      console.log(err);
    } finally {
      setFetch(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {!fetch &&
        users.map((user) => {
          return (
            <UserCard
              key={user._id}
              id={user._id}
              firstName={user.firstName}
              lastName={user.lastName}
              role={user.role}
              email={user.email}
            />
          );
        })}
    </div>
  );
}

export default AdminHome;
