import cassandra from 'cassandra-driver';
import config from '../config/index.js';

const client = new cassandra.Client({
    contactPoints: config.db.contact_points,
    localDataCenter: config.db.data_center,
    keyspace: config.db.keyspace

});

export async function query(query, params) {
    try {
        let result = await client.execute(query, params);
        return result.rows;
    } catch (error) {
        console.log(error);
        //throwing to be handled at next level in controller
        throw error;
    }

}