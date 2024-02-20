import "./PokeDexLeft.css"

const PokeDexLeft = (({pokemonName, pokemonSprite, pokemonTypes, modifyIndex}) => {
    const name = pokemonName;
    const sprite = pokemonSprite;
    const types = pokemonTypes;

    const leftArrow = "https://s3-alpha-sig.figma.com/img/a29b/af48/758326061f2ccf982c8f4dcfbd0ef5cf?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D-s27cf1YjApqWpRiPym8lfbJDkNdRxT-Ln7RqBK0opbZ7ce9zhza4MDupPm1vEi0zHxxiRsN8lCavo2KG19ZkGNzNOxKJ2mVrXGiziGNu33DOZFsxDNIQ1GBNND0NdZF8rQf9Uj2TfFjF1xHwoVOHRQeWEhVsd6TQ-2tuXwBtkWfTKqMiRRXYlNgIcnjR7LEdqvekpEGXZRBqCAWVlmXytsjg9kUe4FTmKyRTf-dtgbesI~bO47BB-KNWnQTzx-cu06rjJDEk7dyONDtjZNm8Pt6HCcW47hX49i9OFpxbtL4ShDeuR3kIGSDOA4tsUT779kovUJtTAkWbMD5bSILA__"

    const increment = (() => modifyIndex(1))

    const decrement = (() => modifyIndex(-1))

    return (
        <div className="pokedex-left">
            {/* <h2>Left Side</h2> */}
            <img src={sprite} alt={`${name} image`}></img>
            <div className="name">
                <p> {name} </p>
            </div>
            <p style={{margin: '1vh', marginLeft: '20%', alignSelf: 'start', fontWeight: 'bold'}}> Types: </p>
            <div className="types">
                {types.map((type) => {
                    return (
                        <p className={`type ${type.type.name}`}>{type.type.name}</p>
                    )
                })}
            </div>
            <div className="buttons">
                <button className="button" onClick={decrement}> <img style={{border: 'none', width: '30%'}} src={leftArrow} alt="Left arrow" /> </button>
                <button className="button" onClick={increment}> <img style={{border: 'none', width: '30%', transform: 'scaleX(-1)'}} src={leftArrow} alt="Right arrow" />  </button>
            </div>
        </div>
    )
}) 

export default PokeDexLeft;