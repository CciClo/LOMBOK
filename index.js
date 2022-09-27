
let a = [
{"email": "andrea@gmail.com", "name": "Andrea", "score": 60}, 
{"email": "andres@gmail.com", "name": "Andrés", "score": 34}, 
{"email": "georg@academlo.com", "name": "Georg", "score": 12},
{"email": "geogi@academlo.com", "name": "Georgi", "score": 48}
]


let b = "hola como estan"

function findMostCommonLetter(text) {
  // escribe tu solución aquí
  let letterText = text.split("");
  let count = 0;
  let letter = "";
  for (let i of letterText) {
    let counter = 0;
    for (let o of letterText) {
      if (i === o) {
        counter++;
      }
    }
    if (counter > count) {
      count = counter;
      letter = i;

    }
  }
  return letter;
  // Recuerda que en esta prueba debes "retornar" el resultado
  // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable mostCommonLetter
  // return mostCommonLetter;


}
console.log(findMostCommonLetter(b))