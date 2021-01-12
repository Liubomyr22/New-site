import React from "react";
import { connect } from "react-redux";
import {
  updateNewPostActionCreator,
  addPostActionCreator,
} from "../../../Redux/messagesPageReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.messagesPage.posts,
    newPostText: state.messagesPage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (text) => {
      let action = updateNewPostActionCreator(text);
      dispatch(action);
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
