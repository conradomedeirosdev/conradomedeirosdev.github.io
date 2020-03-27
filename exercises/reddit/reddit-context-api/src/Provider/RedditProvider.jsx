import React, { useState } from 'react';
import { getREDDIT } from '../Services/Services';
import RedditContext from '../Context/RedditContext';

const RedditProvider = ({ children }) => {
  const [data, setData] = useState({ data: [], sucess: false });
  const [select, setSelect] = useState("reactjs");

  const fetchReddit = (type) => {
    getREDDIT(type)
      .then((data) => {
        setData({ data: data.children, sucess: true });
      });
  };

  const context = {
    setData,
    data,
    fetchReddit,
    select,
    setSelect,
  };

  return (
    <RedditContext.Provider value={context}>
      {children}
    </RedditContext.Provider>
  );
};

export default RedditProvider;
