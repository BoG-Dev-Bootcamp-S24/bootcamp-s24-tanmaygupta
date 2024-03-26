import deleteTicket from "../../../server/mongodb/actions/deleteTicket"

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        try {
            const deleteStatuts = await deleteTicket(req.query);
            if (deleteStatuts === "Ticket Not Found") {
                return res.status(400).send("Ticket Not Found");
            } else {
                return res.status(200).send("Success");
            }
        } catch (e) {
            return res.status(500).send("Failed");
        }
    } else {
        res.status(405).send("Method not allowed");
    }
}