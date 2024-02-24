import { Resources } from "./resources.js";

export class Player extends ex.Actor {
    constructor() {
      super({
        pos: ex.vec(150, 150),
        width: 100,
        height: 100
      });
    }
  
    onInitialize() {
      this.graphics.add(Resources.Sword.toSprite());
      this.on('pointerup', () => {
        alert('yo');
      });
    }
  }