// DO NOT DELETE

import * as React from 'react'
import {useState, useEffect} from 'react'
import './App.css'
import {Header} from './Header';
import {Description} from './Description';
import { DogListContainer } from './DogListContainer';

/**
 * 
 * @type {React.FC}
 */

export const App = () => {

  const changeUrl = () => {
    // fetch("https://dog.ceo/api/breeds/image/random")
    // .then((response) => {
    //   return response.json();
    // })
    // .then((data) => {
    //   const status = data.status;
    //   if(status === "success") {
    //     const dogUrl = data.message;
    //     setDogUrl(dogUrl);
    //   }
    // });
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(result => {
        const dog = result.message
        setDogUrl(dog)
      })
      .catch(error => {})
  }
  
  const [dogUrl, setDogUrl] = useState(" https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
  return (
    <div>
      <Header />
      <Description url={dogUrl} changeUrl={changeUrl}/>
      <DogListContainer />
    </div>


  );
};
