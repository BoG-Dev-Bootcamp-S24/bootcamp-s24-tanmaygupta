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
                <h2> Info </h2>
                <div className="display">
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
                <h2> Moves </h2>
                <div className="display">
                    {moves.map((move) => {
                        return (
                            <p> {move.move.name} </p>
                        )
                    })}
                </div>
            </div>
        )
    })

    return (
        <div className="pokedex-right">
            { choice === 0 ? displayInfo() : displayMoves() }
            <div className="buttons">
                <button onClick={chooseInfo} className={`button ${choice === 0 ? 'active' : ''}`}> Info </button>
                <button onClick={chooseMoves} className={`button ${choice === 1 ? 'active' : ''}`}> Moves </button>
            </div>
        </div>
    )
})

export default PokeDexRight;