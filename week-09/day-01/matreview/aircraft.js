'use strict';

const createAircraft = () => {
  let ammo = 0;

  const refill = () => {
    ammo = 10;
  }

  const fight = () => {
    const oldAmmos = ammo;
    ammo = 0;
    return oldAmmos * 50;
  }

  refill();

  return {fight};
}

let emptyAircraft = createAircraft();
let aircraft = createAircraft();
aircraft.refill();
console.log(aircraft.fight());
console.log(emptyAircraft.fight());
aircraft.apple = 5;