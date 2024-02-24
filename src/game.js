// In vanilla js, ex gets defined as a global from the import script tag
// <script src="https://www.unpkg.com/excalibur@latest/build/dist/excalibur.min.js"></script>

import { loader } from './resources.js'
import { Player } from './player.js';

const game = new ex.Engine({
    width: 800,
    height: 600
});

game.add(new Player);
game.start(loader);