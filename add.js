const [nodePath, filePath, firstNumberString, secondNumberString] = process.argv;

const firstNumber = Number(firstNumberString);
const secondNumber = Number(secondNumberString);

const result = add(firstNumber, secondNumber);

function add(a, b) {
  return a + b;
}

console.log(result);
