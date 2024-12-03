// This will be where all the input validation will happen
function checkNumbers(number) {
  number = parseInt(number);
  if (!Number.isInteger(number)) {
    return true;
  }
  return false;
}

function checkOpertaion() {
  //pass
}

module.exports = { checkNumbers, checkOpertaion };
