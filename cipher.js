const { workerData } = require("worker_threads");

const alphabet = "abcdefghijklmnopqrstuvwxyz"
const key = "zyxwvutsrqponmlkjihgfedcba"
let word = " Vybirpelcgbtencul"
i = 0;
result = ""

while(i < word.length) {
    ind = alphabet.indexOf(word.charAt(i));
    result = result + key.charAt(ind);
    i++;
}

console.log(result)