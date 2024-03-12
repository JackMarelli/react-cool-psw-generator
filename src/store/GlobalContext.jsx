import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext({});

export default function GlobalContextProvider(props) {
  const context = {};

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}
