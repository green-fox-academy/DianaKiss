'use strict';

import { AirFighter } from './airFighter';
import { Carrier } from './carrier';

let harrier = new AirFighter('Harrier', 10, 'military', 10, 10, 2, 100);
let f16 = new AirFighter('F16', 20, 'military', 8, 8, 2, 100);
let f35 = new AirFighter('F35', 20, 'military', 12, 12, 50, 100);


// console.log(harrier);

// console.log(``);

harrier.fight(f16);

// console.log(f16 );
// console.log('');


harrier.refill(40);
// console.log(harrier);

harrier.fight(f35);
// console.log(harrier);

f35.fight(harrier);

// console.log(harrier);
// console.log('');


// console.log(f35);

let enterprise = new Carrier('Enterprise');
enterprise.storeAirFighters(f16);
enterprise.storeAirFighters(harrier);
console.log(enterprise);
