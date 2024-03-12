export default async function handler(req, res) {

    const API_URL = "https://pokeapi.co/api/v2/pokemon/";

    if (req.method === "POST") {
        try {
            const {pokemon1, pokemon2} = req.body; //get names from request body

            const response1 = await fetch(API_URL + pokemon1); //fetch data for pokemon1
            if (!response1.ok) {
                throw Error("Could not properly fetch data");
            }
            const data1 = await response1.json();

            const response2 = await fetch(API_URL + pokemon2); //fetch data for pokemon2
            if (!response2.ok) {
                throw Error("Could not properly fetch data");
            }
            const data2 = await response2.json();

            if (data1 && data2) {
                const base1 = data1.stats[0].base_stat;
                const base2 = data2.stats[0].base_stat;

                const winner = base1 < base2 ? data2 : data1;
        
                res.status(200).json({
                winner: {
                    name: winner.name,
                    sprite: winner.sprites.front_default,
                    type: winner.types[0].type.name,
                },
                });
            }

        } catch (error) {
            res.status(400).json({error: "Server error"});
        }
    }
}