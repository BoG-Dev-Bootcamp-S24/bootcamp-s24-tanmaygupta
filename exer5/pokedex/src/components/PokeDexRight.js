import "./PokeDexRight.css"
import { useState } from "react";

const PokeDexRight = (({pokemonStats, pokemonMoves, pokemonHeight, pokemonWeight}) => {

    const stats = pokemonStats;
    const moves = pokemonMoves;
    const height = pokemonHeight;
    const weight = pokemonWeight;

    const [choice, setChoice] = useState(0);

    const chooseMoves = (() => {
        setChoice(1);
    })

    const chooseInfo = (() => {
        setChoice(0);
    })

    const displayInfo = (() => {
        return (
            <div className="info">
                <h3> Info </h3>
                <div className="stats">
                    <p> height: {height / 10}m </p>
                    <p> weight: {weight / 10}kg</p>
                    {stats.map((stat) => {
                        return (
                            <p> {stat.stat.name}: {stat.base_stat}</p>
                        )
                    })}
                </div>
            </div>
        )
    })

    const displayMoves = (() => {
        return (
            <div className="moves">
                <h3> Moves </h3>
            </div>
        )
    })

    return (
        <div className="pokedex-right">
            { choice === 0 ? displayInfo() : displayMoves() }
            <div className="buttons">
                <button onClick={chooseInfo}> Info </button>
                <button onClick={chooseMoves}> Moves </button>
            </div>
        </div>
    )
})

export default PokeDexRight;