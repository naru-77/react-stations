// DO NOT DELETE
import React from "react";
import {useState, useEffect} from 'react'

export function DogListContainer(){
    const [breeds,setBreeds] = useState([])

    useState(()=>{
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(res=>res.json())
        .then(result => {
            const breedsResult = result.message
            setBreeds(breedsResult)
        })
        .catch(err => {})
    },[])
}