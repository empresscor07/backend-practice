import {query} from "../../lib/db.js";

//inserts new user in database
async function create(req, res) {
    const cql = `
    INSERT INTO cburns.user (id, username, pass)
    VALUES(now(), ?, ?);
    `;

    //question marks replaced in order by array below
    const params = [
        req.body.username,
        req.body.password
    ]

    try {
        await query(cql, params);

        res.send({
            message: 'created'
        });
    } catch (error) {
        res.status(500).send({
            message: 'error'
        });
    }
}



export default {
    //login,
    create
}