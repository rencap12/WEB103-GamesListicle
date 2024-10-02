import express from 'express';
import GamesController from '../controllers/games.js';

const router = express.Router();

// Define the GET route for retrieving games
router.get('/', GamesController.getGames);

export default router;
