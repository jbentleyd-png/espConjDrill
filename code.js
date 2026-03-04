//Ok I imagine the code is gonna go something like this:

/* ask for word */

function getInputVerb() {
  let result = prompt(
    "Enter an infinitive:(MUST end in 'er', 'ir', or 'ar'):",
    "",
  );
  return result;
}

let inputVerb = getInputVerb();
console.log(inputVerb);

/*detect word type by chopping off final two letters of verb */
function getVerbType(verb) {
  let result = verb.slice(-2);
  if (!(result == "er" || result == "ar" || result == "ir")) {
    result = "notInfinitive";
  }
  return result; //this has to be OUTSIDE the if block to ensure it doesn't get scoped out.
}

/* Ensure input is an infinitive:*/
while (getVerbType(inputVerb) == "notInfinitive") {
  inputVerb = getInputVerb();
}

console.log(getVerbType(inputVerb));
console.log(inputVerb);

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
