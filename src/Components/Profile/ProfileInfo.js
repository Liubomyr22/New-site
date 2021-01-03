import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.contentImg}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU"
        />
      </div>
      <div className={s.descriptionBlock}>
      ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
