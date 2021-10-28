// DO NOT DELETE
import React,{useState,useEffect} from 'react';
import { DogListContainer } from './DogListContainer';

export const BreedsSelect = (props) =>{
    
    const breeds =props.breeds;
    // const imageList = props.imageList;

    const listItems = breeds.map((breeds)=>
        <option key={breeds} value={breeds} text={breeds}>{breeds}</option>
    );

    // const image = imageList.map((imageList)=>
    //     <div>
    //     <img src={imageList}></img>
    //     </div>
    // );

    return　(
        <React.Fragment>
            <select value={props.value} onChange={props.handleChange}>
                {listItems}
            </select>
            <div class="button_wrapper">
            <button onClick={props.onButtonClick}>表示する</button>
            </div>
            {/* {image} */}
        </React.Fragment>
    )
}
// import React from "react";


// export function BreedsSelect(props){
//     const breeds = props.breeds
//     const handleChange = props.handleChange
//     const selectBreed = props.selectBreed

//     const listItems = breeds.map((breed) => (
//         <option key={breed} value={breed} text={breed}>
//             {breed}
//         </option>
//       ))
// return(
//     <select　onChange={handleChange} selectBreed={selectBreed}>
//         <option></option>
//         {listItems}
//     </select>
// )
// }