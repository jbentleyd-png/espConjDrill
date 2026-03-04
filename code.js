//Ok I imagine the code is gonna go something like this:

/* ask for word */

function getInputVerb() {
  let result = prompt(
    "Enter an infinitive:(MUST end in 'er', 'ir', or 'ar'):",
    "",
  );
  return result; //note, haivng a distinct name ('result' rather than 'inputVerb' in the local scope made a difference this time. Not always, but probably good practice.)
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
function checkIrregular() {
  let irregularStatus = false; //we need to declare it out here so that it exists outside just the scope of the if statement.
  //added the false here to save a couple lines.
  if (getVerbType(inputVerb) == "er") {
    if (inputVerb == "atender" || inputVerb == "hacer") {
      irregularStatus = true;
    }
    return irregularStatus;
  }
}
console.log(checkIrregular());
/*generate correct answers once verb type has been determined*/

/*generate fields for inputting answers*/
/*check answer function onclick*/
