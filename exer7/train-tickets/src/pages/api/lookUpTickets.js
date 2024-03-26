import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const tickets = await readTicketsByUser(req.query);
            if (tickets.length === 0) {
                return res.status(400).send("User Not Found");
            } else {
                return res.status(200).send(tickets);
            }
        } catch (e) {
            return res.status(500).send("Failed");
        }
    } else {
        res.status(405).send("Method not allowed");
    }
}