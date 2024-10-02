import './config/dotenv.js';
import pool from './config/database.js';

// console.log('from test/js');
// console.log('DB_HOST:', process.env.PGHOST);
// console.log('DB_USER:', process.env.PGUSER);
// console.log('DB_PASSWORD:', process.env.PGPASSWORD);
// console.log('DB_NAME:', process.env.PGDATABASE);


async function testConnection() {
    try {
      // Run a simple query to check the connection
      const result = await pool.query('SELECT NOW() AS current_time'); // Gets the current time
      console.log('Connection successful! Current time:', result.rows[0].current_time);
    } catch (err) {
      console.error('Error connecting to the database:', err); // Log any errors
    }
  }
  
  // Call the testConnection function
  testConnection();