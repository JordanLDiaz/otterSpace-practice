import { appState } from "../AppState.js";

class FruitsService {
  mineFruit() {
    appState.fruit++
    // console.log('fruit count', appState.fruit);
    appState.upgrades.forEach(u => {
      if (u.quantity > 0 && u.type == 'click') {
        appState.fruit += (u.multiplier * u.quantity)
      }
    })
  }

}

export const fruitsService = new FruitsService();