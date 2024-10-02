import './dotenv.js';
import  pool  from './database.js';
import gameData from '../data/games.js';


// console.log('Database Host:', process.env.PGHOST);
// console.log('Database User:', process.env.PGUSER);
// console.log('Database Name:', process.env.PGDATABASE);


const createGamesTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS games;
        CREATE TABLE IF NOT EXISTS games (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            genre VARCHAR(255),
            releaseDate DATE,
            developer VARCHAR(255),
            rating INT,
            copiesSold DECIMAL,
            description TEXT,
            image VARCHAR(400)
        )
    `
    try {
        await pool.query(createTableQuery)
        console.log(' Games table created successfully')
    } catch (err) {
        console.error(' Error creating games table', err)
    }
};

const seedGamesTable = async () => {
    await createGamesTable()

    gameData.forEach(async (game) => {
        const insertQuery = {
            text: 'INSERT INTO games (title, genre, releaseDate, developer, rating, copiesSold, description, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
            values: [
                game.title,
                game.genre,
                game.releaseDate,
                game.developer,
                game.rating,
                game.copiesSold,
                game.description,
                game.image
            ]
        }
        try {
            await pool.query(insertQuery)
            console.log(` ${game.title} added successfully`)
        } catch (err) {
            console.error(' Error inserting game', err)
        }
    })
};

seedGamesTable();
