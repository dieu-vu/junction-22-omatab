import React, {Dispatch, SetStateAction, useContext, useState} from 'react';
import { MainContextType } from './MainContextType';
  
  
const MainContext = React.createContext({
  state: {} as MainContextType,
  setState: {} as Dispatch<SetStateAction<MainContextType>>,
});

const MainProvider = ({
  children,
  value = {} as MainContextType
}: {
    children: React.ReactNode, 
    value? : MainContextType
}) => {
    const [state, setState] = useState(value);

    return (
      <MainContext.Provider
        value={{ state, setState }} >
      {children}
    </MainContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateContext");
  }
  return context;
}

export { MainProvider, useGlobalState};
