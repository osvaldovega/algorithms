const CHARS_TO_REPLACE_REGEX = /(?<=\w{1})(.*)(?=-?\w{1,4})/g;
const CHAR_TO_DISPLAY = '#';

/**
 * replaceCharacters function take the string parameter and 
 * replace the selected elements for a especific value
 * @param {String} characters - A string value 
 */
function replaceCharacters(characters) {
  return characters.replace(/(\w{1})/g, () => CHAR_TO_DISPLAY);
}

/**
 * maskExpression function receive a string parameter and evaluate the
 * parameeter based on a regular expression.
 * The regular expression is the one to select the part of the expression to mask
 * @param {String} expression - A string parameter to evaluate 
 */
function maskExpression(expression) {
  if (expression.length === 0) return '';
  if (expression.length < 6) return creditcard;
  const maskedValue = expression.replace(CHARS_TO_REPLACE_REGEX, replaceCharacters);
  return maskedValue;
}

console.log(`Credit card => '' => ${maskExpression('')}`);
console.log(`Credit card => '5512103073210694' => ${maskExpression('5512103073210694')}`);
console.log(`Credit card => '544321' => ${maskExpression('544321')}`);
console.log(`Credit card => '5432431' => ${maskExpression('5432431')}`);
console.log(`Credit card => '5512-1030-7321-0694' => ${maskExpression('5512-1030-7321-0694')}`);
console.log(`Credit card => '5512-1030-7321-0694' => ${maskExpression('551-1030-7321-064')}`);
