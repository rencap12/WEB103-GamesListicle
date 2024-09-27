const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the public directory (if you create one)
app.use(express.static('public'));

// Route for the main index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for The Legend of Zelda: Breath of the Wild
app.get('/game1', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/game1.html'));
});

// Route for Animal Crossing: New Horizons
app.get('/game2', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/game2.html'));
});

// Route for Super Mario Odyssey
app.get('/game3', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/game3.html'));
});

// Route for Mario Kart 8 Deluxe
app.get('/game4', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/game4.html'));
});

// Route for Splatoon 3
app.get('/game5', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/game5.html'));
});

// Route for Super Smash Bros Ultimate
app.get('/game6', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/game6.html'));
});

// 404 Route
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
