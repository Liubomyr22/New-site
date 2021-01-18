
import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  startLoading,
  finishLoading,
  setCurrentPage,
  setTotalCount,
  getUsersThunkCreator
} from "../../Redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    loading: state.usersPage.loading,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

export default connect(mapStateToProps, {
  follow,
  setUsers,
  unfollow,
  startLoading,
  finishLoading,
  setCurrentPage,
  setTotalCount,
  getUsersThunkCreator,
})(Users);
