// DO NOT DELETE
import React,{useState,useEffect} from 'react';
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = (props) =>{

    const [breeds, setBreeds] = useState([]);
    const[selectedBreed,setSelectedBreed]= useState("affenpinscher")

    const[imageList,setImagelist]=useState("")

    const handleChange = (option) =>{
        setSelectedBreed(option.target.value)
    }

    const onButtonClick = () =>{
        fetch("https://dog.ceo/api/breed/"+selectedBreed+"/images/random/3")
        .then(res => res.json())
        .then(imageData => setImagelist(imageData.message))
    }
  
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
            onButtonClick={onButtonClick}
            imageList={Object.values(imageList)}
            />
        </React.Fragment>
    );
}
