
const SUFIX_VALUES = {
  ST: 'st',
  EN: 'en',
  RD: 'rd',
  TH: 'th',
};

/**
 * numberToOrdinal function receive string (number) to convet it in its ordinal way.
 * @param {String} numberToConvert - Number as string
 */
function convertNumberToOrdinal(numberToConvert) {
  if (numberToConvert === 0) return 0;
  const firstValue = numberToConvert % 10;
  const secondValue = numberToConvert % 100;
  
  if (firstValue === 1 && secondValue !== 11) return numberToConvert + SUFIX_VALUES.ST;
  if (firstValue === 2 && secondValue !== 12) return numberToConvert + SUFIX_VALUES.EN;
  if (firstValue === 3 && secondValue !== 13) return numberToConvert + SUFIX_VALUES.RD;
  return numberToConvert + SUFIX_VALUES.TH;
}


console.log(convertNumberToOrdinal(1));
console.log(convertNumberToOrdinal(2));
console.log(convertNumberToOrdinal(3));
console.log(convertNumberToOrdinal(4));
console.log(convertNumberToOrdinal(10));
console.log(convertNumberToOrdinal(11));
console.log(convertNumberToOrdinal(12));
console.log(convertNumberToOrdinal(13));
console.log(convertNumberToOrdinal(17));
console.log(convertNumberToOrdinal(21));
console.log(convertNumberToOrdinal(22));
console.log(convertNumberToOrdinal(23));
console.log(convertNumberToOrdinal(28));
console.log(convertNumberToOrdinal(101));
console.log(convertNumberToOrdinal(111));
console.log(convertNumberToOrdinal(121));
console.log(convertNumberToOrdinal(101010101));
console.log(convertNumberToOrdinal(101010111));
console.log(convertNumberToOrdinal(101010121));
