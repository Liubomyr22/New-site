import React, { Children } from "react";
import s from "./Users.module.css";
import * as axios from "axios";

const Users = ({
  setUsers,
  users,
  unfollow,
  follow,
  startLoading,
  finishLoading,
  loading,
  totalUsersCount,
  pageSize,
  currentPage,
  setCurrentPage,
  setTotalUsersCount,
}) => {
  //    axios.get('https://jsonplaceholder.typicode.com/todos/4')
  //    .then(response => response.json())
  // fetch('https://jsonplaceholder.typicode.com/todos/4')
  //   .then(response => response.json())

  React.useEffect(() => {
    startLoading();
   
      setTimeout(() => {
        axios
          .get(
            `https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=${pageSize}`
          )
          .then((response) => {
            setUsers(response.data);
            // setTotalUsersCount(response.data.totalCount);
          })
          .finally(finishLoading());
      }, 1000);
    
  }, []);

  let onPageChanged = (pageNumber) => {
    setCurrentPage(pageNumber);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/todos?_page=${pageNumber}&_limit=${pageSize}`
      )
      .then((response) => {
        setUsers(response.data);
      });
  };

  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={s.paginations}>
        {pages.map((p) => {
          return (
            <button
              className={currentPage === p && s.selectedPage}
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </button>
          );
        })}
      </div>
      {loading && "Loading..."}
      {users.map((u) => (
        <div className={s.x}>
          <div key={u.id} className={s.usersElementsPositions}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCMKbMRVA2I3sWUZD83MWnKP7Nwh-a3WVLQ&usqp=CAU"
              className={s.img}
            />
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div>
            <span>{u.fullName} </span>
            <span className={s.usersTitle}>{u.title} </span>
            {/* <span>{"u.location.country"} </span> */}
            {/* <span>{u.location.cityName} </span> */}
          </div>
        </div>
      ))}

      {/* <AddSecret>
        <Chil first={"first"} />
      </AddSecret> */}
    </div>
  );
};

// const AddSecret = ({ children }) => {
//   const cloned = React.cloneElement(children, { second: "qwertyuiop" });
//   return <div>----{cloned}----</div>;
// };

// const Chil = ({ first, second }) => {
//   return (
//     <div>
//       *****{first}******{second}*****
//     </div>
//   );
// };

export default Users;
