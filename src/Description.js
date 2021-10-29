// DO NOT DELETE
import React from "react";
import {DogImage} from './DogImage';


export function Description(props) {
    const url = props.url
    const changeUrl = props.changeUrl
    return (
      <div className="container">
        <p className="description">犬の画像を表示するサイトです</p>
          <DogImage url={url} />
          <button onClick={changeUrl}>更新</button>
      </div>
    )
  }