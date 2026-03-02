//Ok I imagine the code is gonna go something like this:

/* ask for word */
const infinitive = prompt("Enter an infinitive:", ""); //replace this with a DOM thingy down the line please.
console.log(infinitive);
/*detect word type by chopping off final two letters of verb (make sure it is an infiinitive)*/
let verbType = infinitive.slice(-2);
console.log(verbType);
/*check for irregular verb (best to keep chopped version of verb as a separate var from the const, which will be the infinitive)*/
if (verbType == "er") {
  if (infinitive == "atender" || infinitive == "hacer") {
    //would be better to have an array of irregular verbs to check through, I think. Cann be on a separate .js?
    verbType = "irr"; //DON'T use "let" here.
  }
}
console.log(verbType);
/*generate correct answers once verb type has been determined*/

/*generate fields for inputting answers*/
/*check answer function onclick*/
