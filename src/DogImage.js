// DO NOT DELETE
import React from "react";

const DogImage = (props) => {
    const dogUrl = props.dogUrl
    const changeUrl = props.changeUrl
    return (
        <img className="photo" src={props.dogUrl}></img>
    );
};

export default DogImage