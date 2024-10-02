import express from 'express';
import './config/dotenv.js';
import path from 'path';
import gamesRoutes from './routes/games.js';
import { fileURLToPath } from 'url';
import pool from './config/database.js';
import cors from 'cors'; // Allow CORS

// Get __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
console.log(__dirname);

// Serve static files from the public directory
app.use(express.static(path.join('C:/Users/renec/Github/web103_listicle/client', '/public'))); // Serve files in the public directory
app.use(cors());
app.use(express.json());

// GET route to fetch games
app.get('/games', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM games'); // Replace 'games' with your table name
        res.json(result.rows); // Send back the rows as JSON
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Serve game details
app.get('/game/:title', async (req, res) => {
    const gameTitle = req.params.title.replace(/_/g, ' '); // Replace underscores with spaces
    try {
        const result = await pool.query('SELECT * FROM games WHERE title = $1', [gameTitle]); // Adjust the query
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Game not found');
        }
    } catch (error) {
        console.error('Error fetching game details:', error);
        res.status(500).send('Error fetching game details');
    }
});

// Route for the main index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/src/index.html')); // Serve index.html from src
});


// 404 Route
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Log the database host to confirm it is loaded correctly
console.log('Database Host:', process.env.PGHOST);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
