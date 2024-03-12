export default async function handler(req, res) {

    const API_URL = "https://pokeapi.co/api/v2/pokemon-species/";

    if (req.method === "GET") {
        try {
            let {pokemonName} = req.query; //get name from request params

            let response = await fetch(API_URL + pokemonName); //fetch evolution chain
            if (!response.ok) {
                throw Error("Could not properly fetch data");
            }
            const pokemonSpecies = await response.json();

            response = await fetch(pokemonSpecies.evolution_chain.url);
            if (!response.ok) {
                throw Error("Could not properly fetch data");
            }
            const data = await response.json();

            if (data) {
                if (data.chain.species.name === pokemonName) {
                    res.status(200).json({next_evolution: data.chain.evolves_to[0].species.name});
                } else if (data.chain.evolves_to[0].species.name === pokemonName) {
                    res.status(200).json({next_evolution: data.chain.evolves_to[0].evolves_to[0].species.name});
                } else {
                    res.status(200).json({next_evolution: pokemonName});
                }
            }

        } catch (error) {
            res.status(400).json({error: "Server error"});
        }
    }
}