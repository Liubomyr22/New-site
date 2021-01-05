import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts}
       newPostText={props.newPostText}
       addPost={props.addPost} 
       updateNewPostText={props.updateNewPostText}

       />
    </div>
  );
};

export default Profile;
