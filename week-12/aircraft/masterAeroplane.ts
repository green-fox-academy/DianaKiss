'use strict';

import { AirFighter } from './airFighter';

let harrier= new AirFighter('Harrier', 10, 'military', 10, 10, 2);

console.log(harrier);

harrier.fly(2);

console.log(harrier);
