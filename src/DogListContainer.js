// DO NOT DELETE
import React from "react";
import {useState, useEffect} from 'react'

export function DogListContainer(props){
    const [breeds,setBreeds] = useState([])

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(res=>res.json())
        .then(result => {
            const breedsResult = result.message
            setBreeds(breedsResult)
        })
        .catch(err => {})
    },[])
}