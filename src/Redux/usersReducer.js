const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"

let initialState = {
  users: [
    {
      id: 1,
      photoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCMKbMRVA2I3sWUZD83MWnKP7Nwh-a3WVLQ&usqp=CAU",
      fullName: "Luco",
      followed: false,
      status: "I am programer",
      location: { cityName: "Lviv", country: "Ukraine" },
    },
    {
      id: 2,
      photoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCMKbMRVA2I3sWUZD83MWnKP7Nwh-a3WVLQ&usqp=CAU",
      fullName: "Dima",
      followed: false,
      status: "I am programer",
      location: { cityName: "Lviv", country: "Ukraine" },
    },
    {
      id: 3,
      photoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCMKbMRVA2I3sWUZD83MWnKP7Nwh-a3WVLQ&usqp=CAU",
      fullName: "Ivan",
      followed: true,
      status: "I am programer",
      location: { cityName: "Lviv", country: "Ukraine" },
    },
    {
      id: 4,
      photoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCMKbMRVA2I3sWUZD83MWnKP7Nwh-a3WVLQ&usqp=CAU",
      fullName: "Ira",
      followed: true,
      status: "I am programer",
      location: { cityName: "Lviv", country: "Ukraine" },
    },
  ],
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
      case SET_USERS:{
          return {
            ...state, users: [...state.users, ...action.users]
          }
        }
    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsersAC = (userId) => {
    return {
      type: SET_USERS,
      userId
    };
  };

export default usersReducer;
