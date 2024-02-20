import "./PokeDexLeft.css"

const PokeDexLeft = (({pokemonName, pokemonSprite, pokemonTypes, modifyIndex}) => {
    const name = pokemonName;
    const sprite = pokemonSprite;
    const types = pokemonTypes;

    const increment = (() => modifyIndex(1))

    const decrement = (() => modifyIndex(-1))

    return (
        <div className="pokedex-left">
            {/* <h2>Left Side</h2> */}
            <img src={sprite} alt={`${name} image`}></img>
            <div className="name">
                <p> {name} </p>
            </div>
            <p style={{margin: '1vh', fontWeight: 'bold'}}> Types: </p>
            <div className="types">
                {types.map((type) => {
                    return (
                        <p className="type">{type.type.name}</p>
                    )
                })}
            </div>
            <div className="buttons">
                <button className="button" onClick={decrement}> &#60; </button>
                <button className="button" onClick={increment}> &#62; </button>
            </div>
        </div>
    )
}) 

export default PokeDexLeft;