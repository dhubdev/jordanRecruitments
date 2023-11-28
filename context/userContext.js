import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [user, setUser] = useState([]);

  const updatedUser = (item) => {
    setProfile(item);
    //console.log(item);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        updatedUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
