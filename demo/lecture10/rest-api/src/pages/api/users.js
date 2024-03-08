import {users} from "./_data";

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(users);
    } else if (req.method === "POST") {
        const body = req.body;
        if (!body) {
            res.status(400).json({error: "Insufficient Information"});
            return;
        }
        const id = Math.floor(Math.random() * 10000) + 1;
        const newUser = {id, ...body};
        
        users.push(newUser);
        res.status(200).json(newUser);
    }
}