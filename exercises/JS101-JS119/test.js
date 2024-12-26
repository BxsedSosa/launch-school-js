// function swapCase(string) {
//   let lowerCase = /[a-z]/g;
//   let strArr = string.split("");
//
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i].search(lowerCase) >= 0) {
//       strArr[i] = strArr[i].toUpperCase();
//     } else {
//       strArr[i] = strArr[i].toLowerCase();
//     }
//   }
//   console.log(strArr.join(""));
// }

function swapCase(string) {
  return string
    .split("")
    .map((char) => {
      if (char.search(/[a-z]/) >= 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");
}

console.log(swapCase("CamelCase")); // "cAMELcASE"
console.log(swapCase("Tonight on XYZ-TV")); // "tONIGHT ON xyz-tv"
