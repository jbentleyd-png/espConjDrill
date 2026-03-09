function getInputVerb() {
  let result = prompt(
    "Enter an infinitive:(MUST end in 'er', 'ir', or 'ar'):",
    "",
  );
  return result;
}

let inputVerb = getInputVerb();
console.log(inputVerb);

function getVerbType(verb) {
  let result = verb.slice(-2);
  if (!(result == "er" || result == "ar" || result == "ir")) {
    result = "notInfinitive";
  }
  return result;
}

while (getVerbType(inputVerb) == "notInfinitive") {
  inputVerb = getInputVerb();
}

console.log(getVerbType(inputVerb));
console.log(inputVerb);

function checkIrregular() {
  let irregularStatus = false;
  if (getVerbType(inputVerb) == "er") {
    if (inputVerb == "atender" || inputVerb == "hacer") {
      irregularStatus = true;
    }
    return irregularStatus;
  }
}
console.log(checkIrregular());

function standardizeInfinitive(word) {
  let first = word[0].toUpperCase();
  let rest = word.slice(1).toLowerCase();
  return first + rest;
}

const infinitive = standardizeInfinitive(inputVerb);
console.log(infinitive);

/*generate correct answers once verb type has been determined*/
/* perhaps best as object properties?*/

/*generate fields for inputting answers*/
/*check answer function onclick*/
