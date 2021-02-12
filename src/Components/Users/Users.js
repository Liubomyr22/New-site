import React from "react";
import s from "./Users.module.css";


const Users = ({
  setUsers,
  users,
  unfollow,
  follow,
  loading,
  totalUsersCount,
  pageSize,
  currentPage,
  getUsersThunkCreator,
  portionSize = 10,
}) => {
  React.useEffect(() => {
    getUsersThunkCreator(currentPage, pageSize);
  }, []);

  let onPageChanged = (pageNumber) => {
    getUsersThunkCreator(pageNumber, pageSize);
  };

  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  //...xc
  //  const[portionSize,setPortionSize] = React.useState(10);
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = React.useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionNumber + 1;
  let rightPortionPageNumber = portionNumber + portionSize;
  return (
    <div>
      <div className={s.pagination}>
        {portionNumber > 1 && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            Prev
          </button>
        )}

        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => {
            return (
              <span
                key={p}
                onClick={(e) => {
                  onPageChanged(p);
                }}
              >
                <button>{p}</button>
              </span>
            );
          })}
        {portionCount > portionNumber && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            Next
          </button>
        )}
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
