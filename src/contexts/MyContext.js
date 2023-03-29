import { useState, createContext } from "react";

export const MyContext = createContext();

export const MyContextProvider = (props) => {
  const [router, setRouter] = useState("");

  return (
    <MyContext.Provider
      value={{
        router,
        setRouter,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
