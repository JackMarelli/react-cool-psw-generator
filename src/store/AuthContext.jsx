import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie"

const AuthContext = createContext({});

export default function AuthContextProvider(props) {
  //const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  const context = {};

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
}
