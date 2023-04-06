import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react";

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = '316a61828bed.209f3a18b9b4930df3d3'

export default function Detail () {
    const [character, setCharacter] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(response => response.data)
        .then(( data ) => {
           if (data.name) {
              setCharacter((oldChars) => [...oldChars, data]);
           } else {
              window.alert('¡No hay personajes con ese ID!');
           }
        });
        return setCharacter({});
     }, [id]);


    return (
        <div>
            <h1>{character.name}</h1>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <h2>{character.origin}</h2>
            <img src={character.image} alt={character.name} />
      </div>
    )
}