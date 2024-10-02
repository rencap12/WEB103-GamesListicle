import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from the .env file located in the config folder
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Log the loaded environment variables for debugging
// console.log('PGHOST:', process.env.PGHOST);
// console.log('PGUSER:', process.env.PGUSER);
// console.log('PGPASSWORD:', process.env.PGPASSWORD);
// console.log('PGDATABASE:', process.env.PGDATABASE);
// console.log('PGPORT:', process.env.PGPORT);
