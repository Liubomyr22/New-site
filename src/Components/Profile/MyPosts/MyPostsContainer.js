
import { connect } from "react-redux";
import {
  updateNewPostText,
  addPostActionCreator,
} from "../../../Redux/messagesPageReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.messagesPage.posts,
    newPostText: state.messagesPage.newPostText
  }
}

const MyPostsContainer = connect(mapStateToProps,{addPostActionCreator,updateNewPostText})(MyPosts)

export default MyPostsContainer;
