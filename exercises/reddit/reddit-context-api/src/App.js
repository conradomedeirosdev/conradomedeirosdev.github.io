import React from 'react';
import RedditProvider from './Provider/RedditProvider';
import MainReddit from './Components/MainReddit';
import {getREDDIT} from './Services/Services';



function App() {
  getREDDIT()
  return (
    <RedditProvider>
      <MainReddit />
    </RedditProvider>
  );
}


export default App;
