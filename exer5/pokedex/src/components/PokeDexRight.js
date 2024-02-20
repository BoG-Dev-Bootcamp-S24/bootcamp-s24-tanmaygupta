import "./PokeDexRight.css"
import { useState } from "react";

const PokeDexRight = (() => {

    const [choice, setChoice] = useState(0);

    const moves = (() => {
        setChoice(1);
    })

    const info = (() => {
        setChoice(0);
    })

    const displayInfo = (() => {
        return (
            <h1> Info selected </h1>
        )
    })

    const displayMoves = (() => {
        return (
            <h1> Moves selected </h1>
        )
    })

    return (
        <div className="pokedex-right">
            { choice === 0 ? displayInfo() : displayMoves() }
            <div className="buttons">
                <button onClick={info}> Info </button>
                <button onClick={moves}> Moves </button>
            </div>
        </div>
    )
})

export default PokeDexRight;