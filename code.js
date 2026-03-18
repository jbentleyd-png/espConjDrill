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

function getArAnswers(arVerb) {
  // OK LET's convert it to an object rather than array for next time.
  const stem = arVerb.slice(0, -2);
  const endings = ["o", "as", "a", "amos", "ais", "an"]; //update for accents, add character input to DOM later
  let answers = [];
  for (let e of endings) {
    //e needs to be declared here for scope.
    answers[e] = stem + e;
  }
  return answers;
}
console.log(getArAnswers("Hablar"));

function getIrAnswers(irVerb) {
  const stem = irVerb.slice(0, -2);
  const endings = ["o", "es", "e", "imos", "ais", "en"]; //update for accents, add character input to DOM later
  let answers = [];
  for (e of endings) {
    answers[e] = stem + e;
  }
  return answers;
}

function getIrAnswers(erVerb) {
  const stem = erVerb.slice(0, -2);
  const endings = ["o", "es", "e", "emos", "ais", "en"]; //update for accents, add character input to DOM later
  let answers = [];
  for (e of endings) {
    answers[e] = stem + e;
  }
  return answers;
}

/*generate correct answers once verb type has been determined*/
/* perhaps best as object properties?*/

/*generate fields for inputting answers*/
//wrap in function later on:
const answerSection = document.querySelector("#answerSection");
const answerField = document.createElement("input");
answerField.type = "text";
const submitAnswers = document.createElement("button");
submitAnswers.textContent = "CLICK";
answerSection.appendChild(answerField);
answerSection.appendChild(submitAnswers); //currently, the whole section only works if the initial alert script is not cancelled, I wonder what is going on with that.

/*check answer function onclick*/
