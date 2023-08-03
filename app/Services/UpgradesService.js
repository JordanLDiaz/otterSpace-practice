import { appState } from "../AppState.js";

class UpgradesService {
  buyClickUpgrade(upgradeName) {
    // first lets console the upgradeName to make sure we're grabbing the right upgrade
    // console.log('buying upgrade from service', upgradeName);
    // next lets create a variable to hold the foundUpgrade object and log it to make sure it's still the right one
    let foundUpgrade = appState.upgrades.find(u => u.name == upgradeName)
    console.log('[PURCHASED AN]', foundUpgrade);

    // check that there is an upgrade, else return
    if (!foundUpgrade || foundUpgrade.type == 'auto') { return }
    // if fruit quantity is > than the foundUpgrades price, decrease the fruit by the price. console the new fruit count to make sure it is accurate
    if (appState.fruit >= foundUpgrade.price) {
      appState.fruit -= foundUpgrade.price
      console.log('[NEW FRUIT COUNT]', appState.fruit);

      // when we buy an upgrade, we also want to increase the upgrade quantity and price. log this price to see what it would be
      foundUpgrade.quantity++
      foundUpgrade.price += foundUpgrade.price * foundUpgrade.multiplier
      console.log('[NEW PRICE]', foundUpgrade.price);

      // this tricks the appstate into listening to changes and emits them 
      appState.emit('upgrades')
    } else {
      alert('Not enough fruit, keep mining!!')
    }

  }
  buyAutoUpgrade(upgradeName) {
    // console.log('[BUYING AUTO UPGRADE]', upgradeName);
    let foundUpgrade = appState.upgrades.find(u => u.name == upgradeName)
    console.log('[PURCHASED A]', foundUpgrade);
    if (!foundUpgrade) { return }
    if (appState.fruit >= foundUpgrade.price) {
      appState.fruit -= foundUpgrade.price
      console.log('[NEW FRUIT COUNT]', appState.fruit);
      foundUpgrade.quantity++
      foundUpgrade.price += foundUpgrade.price * foundUpgrade.multiplier
      console.log('[NEW PRICE]', foundUpgrade.price);
      appState.emit('upgrades')
    } else {
      alert('Not enough fruit, keep mining!')
    }
  }
}

export const upgradesService = new UpgradesService();