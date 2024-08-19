import React, { createContext, useState } from "react";
import datas from '../data.json';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(datas);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
