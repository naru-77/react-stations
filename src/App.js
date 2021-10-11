// DO NOT DELETE

import * as React from 'react'
import './App.css'
import Header from './Header';
import Description from './Description';

/**
 * 
 * @type {React.FC}
 */

export const App = () => {

  const changeUrl = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const status = data.status;
      if(status === "success") {
        const dogUrl = data.message;
        setDogUrl(dogUrl);
      }
    });
  }
  
  const [dogUrl, setDogUrl] = React.useState(" images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
  return (
    <div>
      <Header />
      <Description dogUrl={dogUrl} changeUrl={changeUrl}/>
    </div>


  );
};
