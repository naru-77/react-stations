// DO NOT DELETE

import * as React from 'react'
import './App.css'

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
      <header className="header">DOGアプリ</header>
      <div className="container">
      <p　className="description">犬の画像を表示するサイトです</p>
      <img src={dogUrl}></img>
      <button　onClick={changeUrl}>更新</button>
      </div>
    </div>


  );
};
