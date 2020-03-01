import React, {useReducer} from "react";
import {ProfileContext} from "./ProfileContext";

export const ProfileState = ({ children }) => {
  const [state, dispatch] = useReducer()

  return ( 
    // нужно обернуть все приложение
    <ProfileContext.Provider value={{}}> 
      {children}
    </ProfileContext.Provider> 
  )
};
