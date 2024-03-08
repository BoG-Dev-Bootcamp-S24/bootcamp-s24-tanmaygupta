import {comments} from "./comments"

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(comments);
        console.log("Showng all comments");
    } else if (req.method === "POST") {
        const body = req.body;
        if (!newComment) {
            res.status(400).json({error: "Insufficient Information given"})
            return
        }
        const id = Math.floor(Math.random() * 10000) + 1;
        const newComment = {id, ...body};
        
        comments.push(newComment);
        res.status(200).json(newComment);
    }
}