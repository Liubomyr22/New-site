const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const START_LOADING = "START_LOADING";
const SET_FINISH_LOADING = "SET_FINISH_LOADING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE ";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

let initialState = {
  loading: false,
  users: [
    // {
    //   id: 1,
    //   photoUrl:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCMKbMRVA2I3sWUZD83MWnKP7Nwh-a3WVLQ&usqp=CAU",
    //   fullName: "Luco",
    //   followed: false,
    //   status: "I am programer",
    //   location: { cityName: "Lviv", country: "Ukraine" },
    // },
    // {
    //   id: 2,
    //   photoUrl:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCMKbMRVA2I3sWUZD83MWnKP7Nwh-a3WVLQ&usqp=CAU",
    //   fullName: "Dima",
    //   followed: false,
    //   status: "I am programer",
    //   location: { cityName: "Lviv", country: "Ukraine" },
    // },
    // {
    //   id: 3,
    //   photoUrl:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCMKbMRVA2I3sWUZD83MWnKP7Nwh-a3WVLQ&usqp=CAU",
    //   fullName: "Ivan",
    //   followed: true,
    //   status: "I am programer",
    //   location: { cityName: "Lviv", country: "Ukraine" },
    // },
    // {
    //   id: 4,
    //   photoUrl:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCMKbMRVA2I3sWUZD83MWnKP7Nwh-a3WVLQ&usqp=CAU",
    //   fullName: "Ira",
    //   followed: true,
    //   status: "I am programer",
    //   location: { cityName: "Lviv", country: "Ukraine" },
    // },
  ],
  pageSize: 5,
  totalUsersCount: 44,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};

export const follow = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollow = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const startLoading = () => {
  return {
    type: START_LOADING,
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const finishLoading = () => {
  return {
    type: SET_FINISH_LOADING,
  };
};
export const setTotalCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalUsersCount,
  };
};

export default usersReducer;
