import "reflect-metadata";
import {default as kernel} from "./inversify.config";
import {INinja} from "./Ninja";

var ninja = kernel.get<INinja>("INinja");

// expect(ninja.fight()).eql("cut!"); // true
// expect(ninja.sneak()).eql("hit!"); // true

console.log(ninja.fight()); // cut!
console.log(ninja.sneak()) // hit!