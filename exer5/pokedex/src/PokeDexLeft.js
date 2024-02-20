import "./PokeDexLeft.css"

const PokeDexLeft = (({pokemonName, pokemonSprite, pokemonTypes}) => {
    const name = pokemonName;
    const sprite = pokemonSprite;
    const types = pokemonTypes;


    return (
        <div className="pokedex-left">
            <h2>Left Side</h2>
            <img src={sprite} alt={`${name} image`}></img>
            <h3> {name} </h3>
            <div className="buttons">
                <button className="button"> &#60; </button>
                <button className="button"> &#62; </button>
            </div>
        </div>
    )
}) 

export default PokeDexLeft;