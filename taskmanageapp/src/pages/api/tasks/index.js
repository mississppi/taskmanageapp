import pool from '../../../lib/db';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        console.log("get");
        try {
            const [rows] = await pool.query('SELECT * FROM todos');
            res.status(200).json(rows);
        } catch (err) {
            console.log(err.message)
            res.status(500).json({ error: err.message });
        }
    } 
}