import './dotenv.js';
import pg from 'pg';


// console.log('pool Database Host:', process.env.PGHOST);
// console.log('Database User:', process.env.PGUSER);
// console.log('Database Name:', process.env.PGDATABASE);


const config = {
    // user: process.env.PGUSER,
    // password: process.env.PGPASSWORD,
    // host: process.env.PGHOST,
    // port: process.env.PGPORT,
    // database: process.env.PGDATABASE,
    connectionString: process.env.CONNECTION,
};

// Define the pool first
const pool = new pg.Pool(config);

// Export the pool
export default pool;
