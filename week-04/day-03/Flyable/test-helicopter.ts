'use strict';

import { Vehicle } from './Vehicle';
import { Flyable } from './Flyable';
import { Helicopter } from './Helicopter';

let apache = new Helicopter('Apache', 'khaki', false);


console.log(apache.takeOff());
console.log(apache.fly());
console.log(apache.land());