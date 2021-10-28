// DO NOT DELETE
import React,{useState,useEffect} from 'react';
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = (props) =>{

    // APIで拾ってきた犬種リスト
    const [breeds, setBreeds] = useState([]);

    // プルダウンで選択した犬
    const[selectedBreed,setSelectedBreed]= useState("affenpinscher")

    // //クリックで取得した犬の画像リスト
    // const[imageList,setImagelist]=useState("")

    //onChanegeで実行する関数
    const handleChange = (option) =>{
        setSelectedBreed(option.target.value)
    }

    // //表示するボタンで実行する関数
    // const onButtonClick = () =>{
    //     fetch("https://dog.ceo/api/breed/"+selectedBreed+"/images/random/12")
    //     .then(res => res.json())
    //     .then(imageData => setImagelist(imageData.message))
    // }
  
    useEffect (() =>{
      fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(data => setBreeds(data.message))
    },[]);

    return (
        <React.Fragment>
            <BreedsSelect 
            breeds={Object.keys(breeds)}
            value={selectedBreed}
            handleChange={handleChange}
            // onButtonClick={onButtonClick}
            // imageList={Object.values(imageList)}
            />
        </React.Fragment>
    );
}
// import React from "react";
// import {useState, useEffect} from 'react'
// import { BreedsSelect } from './BreedsSelect';

// export function DogListContainer(props){
//     const [breeds,setBreeds] = useState([])
//     const [selectBreed, setSelectBreed]=useState('')

//     const handleChange = (event) => {
//         setSelectBreed(event.target.value)
//       }

//     useEffect(()=>{
//         fetch('https://dog.ceo/api/breeds/list/all')
//         .then(res=>res.json())
//         .then(result => {
//             const breedsResult = result.message
//             setBreeds(breedsResult)
//         })
//         .catch(err => {})
//     },[])

//     return (
//         <BreedsSelect
//         breeds = {breeds}
//         value={selectBreed}
//         handleChange={handleChange}
//         selectBreed={selectBreed}
//         />
//     )
// }