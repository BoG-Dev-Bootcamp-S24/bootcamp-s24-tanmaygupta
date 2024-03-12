export default async function handler(req, res) {

    const API_URL = "https://pokeapi.co/api/v2/type/";

    if (req.method === "GET") {
        try {
            let {type} = req.query; //get type from request params

            const response = await fetch(API_URL + type); //fetch data
            if (!response.ok) {
                throw Error("Could not properly fetch data");
            }
            const data = await response.json();

            if (data) {
                //Create pokemon list
                const pokemonList = data.pokemon.map((pokemon) => {
                    return pokemon.pokemon.name;
                })

                res.status(200).json(pokemonList);
            }
        } catch (error) {
            res.status(400).json({error: "Server error"});
        }
    }
}