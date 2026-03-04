//Ok I imagine the code is gonna go something like this:

/* ask for word */
let inputVerb = prompt("Enter an infinitive:", ""); //replace this with a DOM thingy down the line please.
console.log(inputVerb);
/*detect word type by chopping off final two letters of verb (make sure it is an infiinitive)*/
let verbType = inputVerb.slice(-2);
if (!(verbType == "er" || verbType == "ar" || verbType == "ir")) {
  //check for actual infinitive. I can already see the utility of function-ing all of ths to re-run easy.
  verbType = "notInfinitive";
}
console.log(verbType);
verbType === "notInfinitive"
  ? (inputVerb = prompt(
      "Enter an infinitive(MUST end in 'er', 'ir', or 'ar'):",
      "",
    ))
  : undefined;

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
