export default async function handler(req, res) {

    const API_URL = "https://pokeapi.co/api/v2/pokemon/";

    if (req.method === "GET") {
        try {
            const id = Math.floor(Math.random() * 1024) + 1; //generate random id

            const response = await fetch(API_URL + id); //fetch data
            if (!response.ok) {
                throw Error("Could not properly fetch data");
            }
            const data = await response.json();
            if (data) {
                res.status(200).json({
                    name: data.name,
                    sprite: data.sprites.front_default,
                    type: data.types[0].type.name,
                })
            }
        } catch (error) {
            res.status(400).json({error: "Server error"});
        }
    }
}