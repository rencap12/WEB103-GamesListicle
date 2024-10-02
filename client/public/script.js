document.addEventListener('DOMContentLoaded', () => {
    const fetchGames = async () => {
        try {
            const response = await fetch('/games');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayGames(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const displayGames = (games) => {
        const gameList = document.getElementById('gameList');
        games.forEach(game => {
            const listItem = document.createElement('li');
            const gameLink = document.createElement('a');
            gameLink.href = `/game/${game.title.replace(/ /g, '_')}`; // Create link with title
            gameLink.textContent = game.title;
            listItem.appendChild(gameLink);
            gameList.appendChild(listItem);
        });
    };

    fetchGames();
});


console.log('script.js is loaded');
