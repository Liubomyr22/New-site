import React from "react";
import s from "./Users.module.css"

const Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <img src={u.photoUrl} className={s.img} />
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div>
            <span>{u.fullName} </span>
            <span>{u.status} </span>
            <span>{u.location.country} </span>
            <span>{u.location.cityName} </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
