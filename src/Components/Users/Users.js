import React, { Children } from "react";
import s from "./Users.module.css";
import { getUsers } from "./api/api";

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
  React.useEffect(() => {
    startLoading();
    setTimeout(() => {
      getUsers(currentPage, pageSize)
        .then((data) => { 
          setUsers(data);
          // setTotalUsersCount(response.data.totalCount);
        })
        .finally(finishLoading());
    }, 1000);
  }, []);

  let onPageChanged = (pageNumber) => {
    setCurrentPage(pageNumber);
    getUsers(pageNumber, pageSize).then((data) => {
        // console.log("data" + data)
      setUsers(data);
      
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
        <div className={s.usersContainer}>
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
