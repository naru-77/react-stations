// DO NOT DELETE
import React,{useState,useEffect} from 'react';
import { DogListContainer } from './DogListContainer';

export const BreedsSelect = (props) =>{
    
    const breeds =props.breeds;
    const imageList = props.imageList;

    const listItems = breeds.map((breeds)=>
        <option key={breeds} value={breeds} text={breeds}>{breeds}</option>
    );

    const image = imageList.map((imageList)=>
        <div>
        <img src={imageList}></img>
        </div>
    );

    return　(
        <React.Fragment>
            <div className="BreedsSelect">
            <p>BreedList</p>
            <select value={props.value} onChange={props.handleChange}>
                {listItems}
            </select>
            <button onClick={props.onButtonClick}>表示する</button>
            </div>
            <div className="img_box">
            {image}
            </div>
        </React.Fragment>
    )
}
