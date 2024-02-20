import PokeDexLeft from "./PokeDexLeft";
import PokeDexRight from "./PokeDexRight";
import "./PokedexManager.css";
import { useState, useEffect } from "react";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

const PokedexManager = (() => {

    const [index, setIndex] = useState(1);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    function modifyIndex(change) {
        if (index === 1 && change === -1) {
            setIndex(1);
        } else if (index === 1025 && change === 1) {
            setIndex(1025);
        } else {
            setIndex(index + change);
        }
    }

    async function getData() {
        try {
            const response = await fetch(API_URL + index);
            if (!response.ok) {
                throw Error("Could not properly fetch data");
            }
            const newData = await response.json();
            setData(newData);
            setError(null);
        } catch (error) {
            console.log(`Error occured: ${error}`);
            setError(error);
        }
    }

    useEffect (() => {
        getData()
    }, [index])

    return (
        <div className="pokedex-manager">
            {/* <h2> This the Pokedex Manager </h2> */}
            <br />
            {error && <p> Error occurred: {error} </p>}
            {data && <PokeDexLeft pokemonName = {data.name} pokemonSprite = {data.sprites.front_default} 
                pokemonTypes = {data.types} modifyIndex={modifyIndex}/>}
            {data && <PokeDexRight />}
        </div>
    )
})

export default PokedexManager;