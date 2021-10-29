import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../redux/actions";

import UserCard from "../UserCard/UserCard";

const UserList = () => {
  const { loading, users } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          {" "}
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          {users.map((user, i) => (
            <UserCard user={user} key={i} /> //kifech
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
