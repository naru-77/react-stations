// DO NOT DELETE
import React from "react";

const DogImage = (props) => {
    return (
        <img className="photo" src={props.dogUrl}></img>
    );
};

export default DogImage