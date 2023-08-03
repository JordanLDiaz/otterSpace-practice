import { appState } from "../AppState.js";
import { fruitsService } from "../Services/FruitsService.js";
import { setText } from "../Utils/Writer.js";

function _drawFruit() {
  // NOTE either of these work... maybe show off both?
  // document.getElementById('fruit-count').innerText = appState.fruit
  setText('fruit-count', appState.fruit)
}

function _drawClickCount() {
  let clickCount = 1
  appState.upgrades.forEach(u => {
    if (u.quantity > 0 && u.type == 'click') {
      clickCount += u.multiplier * u.quantity
      console.log('[CURRENT CLICKCOUNT]', clickCount);
    }
  })
  // @ts-ignore
  document.getElementById('click-count').innerText = clickCount
}

// function _drawAutoPower() {
//   let autoPower = 0

// }
export class FruitsController {
  constructor() {
    // NOTE spend some time showing what happens when we have one vs. both of these below for _drawFruit
    appState.on('fruit', _drawFruit)
    _drawFruit()
    appState.on('upgrades', _drawClickCount)
    _drawClickCount()
  }

  mineFruit() {
    // console.log('where those pineapples be?');
    fruitsService.mineFruit()
  }
}