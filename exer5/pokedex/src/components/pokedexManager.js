import "./PokedexManager.css";
import { useState, useEffect } from "react";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

const PokedexManager = (() => {

    const [index, setIndex] = useState(1);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

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
            <h1> This the Pokedex Manager </h1>
            <br />
            {error && <p> Error occurred: {error} </p>}
            {data && <p> Pokemon: {data.name} </p>}
        </div>
    )
})

export default PokedexManager;