import React, { useState, useContext, createContext } from 'react';

export const AppContext = createContext([]);

export default function useAppContext() {
  const appContext = useContext(AppContext);
  
  return appContext;
};

export const ContextProvider = ({children}) => {
  const [userList, setUserList] = useState(["hello user"]);
  return (
      <AppContext.Provider value={ {userList, setUserList} }>
        {children}
      </AppContext.Provider>
  );
}
