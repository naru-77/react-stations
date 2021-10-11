// DO NOT DELETE
import React from "react";

const Description = (props) => {
    const dogUrl = props.dogUrl
    const changeUrl = props.changeUrl
    return (
    <div className="container">
      <p　className="description">犬の画像を表示するサイトです</p>
      <img src={dogUrl}></img>
      <button　onClick={changeUrl}>更新</button>
    </div>
    );
};

export default Description