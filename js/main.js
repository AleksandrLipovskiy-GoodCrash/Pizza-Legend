import '../assets/css/style.css';

import Game from './game/Game.js';

window.onload = function() {
  const game = new Game({
    element: document.querySelector("#game")
  });
  game.init();
}
