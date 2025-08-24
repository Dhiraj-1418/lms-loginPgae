import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [token,setToken]= useState(null)
    const [check,setCheck]= useState(false)
  

  return <AuthContext.Provider value={{token,setToken,check,setCheck}}>{children}</AuthContext.Provider>;
}
