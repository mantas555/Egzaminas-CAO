/* ------------------------------ TASK 9 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funcijos
-------------------------------------------------------------------------------------------- */
import { composition } from "./modules/math/composition.js";
import { division } from "./modules/math/division.js";
import { multiplication } from "./modules/math/multiplication.js";
import { substraction } from "./modules/math/subtraction.js";
import { one, two, three, four, five } from "./modules/numbers/numbers.js";

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);


console.log('suma: '+a);//5 ats
console.log('dalyba: '+b);//2 ats
console.log('atimtis: '+c);//1 ats
console.log('daugyba: '+d);//10 ats
