import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { MainContextType } from './MainContextType';
import { Content } from '../hooks/OrderDTO';
  
  
const MainContext = React.createContext<MainContextType | null>(null);

const MainProvider = ({ children} : {
    children: React.ReactNode
}) => {
    const [orderContent, setOrderContent] = useState<Content[]>([]);
    const [update, setUpdate] = useState<number>(0);

    return (
      <MainContext.Provider
        value={{ orderContent, setOrderContent, update, setUpdate }} >
      {children}
    </MainContext.Provider>
  );
};

export {MainContext, MainProvider};
