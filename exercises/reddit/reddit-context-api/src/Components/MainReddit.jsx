import React, { useContext, useEffect } from 'react';
import RedditContext from '../Context/RedditContext';


const isLoadingData = (value, setData, fetchReddit, setSelect) => {
  setData({ sucess: false });
  setSelect(value);
  fetchReddit(value);
}

export const dateNow = () => {
  const today = new Date();
  const time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  return time;
}

const generateInput = (select, setData, fetchReddit, setSelect) => {
  return (
    <input
      data-testid="button-refresh"
      type="button" 
      value="refresh" 
      onClick={() => isLoadingData(select, setData, fetchReddit, setSelect)}
    />
  )
}

const generateSelect = (
  setData,
  fetchReddit,
  setSelect,
 ) => (
  <select
    data-testid="select-column"
    onChange={(e) => isLoadingData(e.target.value, setData, fetchReddit, setSelect)}
  >
    <option disabled >Escolha sua opção</option>
    <option selected value="reactjs">reactjs</option>
    <option value="frontend">frontend</option>
  </select>
 );

function MainReddit() {
  const {
    setSelect,
    setData,
    data,
    select, 
    fetchReddit,
  } = useContext(RedditContext);

  useEffect(() => {
    fetchReddit(select)
  }, [])
console.log(data)
  return (
    <div>
      <h1>Selected: {select}</h1>
      {generateSelect(setData, fetchReddit, setSelect)}
      <h4
        data-testid="last-update"
      >
      {`Last update at ${dateNow()}`}
      </h4>
      {generateInput(select, setData, fetchReddit, setSelect)}
      {!data.sucess ? <h1>Loading...</h1> :
      data.data.map((tag, index) => 
        <ul
          data-testid={`title-${index}`}
          key={tag.data.title}
        >
          <li
            data-testid="li"
          >{tag.data.title}</li>
        </ul>
      )}
    </div>
  );
}

export default MainReddit;