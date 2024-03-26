import updateTicketByUser from "../../../server/mongodb/actions/updateTicketByUser";

export default async function handler(req, res) {
    if (req.method === 'PATCH') {
        try {
            const updateStatus = await updateTicketByUser(req.body);
            if (updateStatus === "Ticket Not Found") {
                return res.status(400).send("Ticket Not Found");
            } else if (updateStatus === "User Not Found") {
                return res.status(400).send("User Not Found");
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