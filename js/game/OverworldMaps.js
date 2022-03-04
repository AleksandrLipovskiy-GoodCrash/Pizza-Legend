import Person from '../core/Person.js';
import utils from '../utils/utils.js';

const OverworldMaps = {
  DemoRoom: {
    lowerSrc: "../../assets/images/maps/DemoLower.png",
    upperSrc: "../../assets/images/maps/DemoUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(6),
        src: "../../assets/images/characters/people/hero.png"
      }),
      npc1: new Person({
        x: utils.withGrid(7),
        y: utils.withGrid(9),
        src: "../../assets/images/characters/people/npc1.png"
      })
    }
  },
  Kitchen: {
    lowerSrc: "../../assets/images/maps/KitchenLower.png",
    upperSrc: "../../assets/images/maps/KitchenUpper.png",
    gameObjects: {
      hero: new Person({
        x: 3,
        y: 5,
      }),
      npcA: new Person({
        x: 9,
        y: 6,
        src: "../../assets/images/characters/people/npc2.png"
      }),
      npcB: new Person({
        x: 10,
        y: 8,
        src: "../../assets/images/characters/people/npc3.png"
      })
    }
  },
}

export default OverworldMaps;
