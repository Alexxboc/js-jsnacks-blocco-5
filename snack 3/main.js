/* 
SNACK 3 
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/


function reverseWord(my_string) {
   return my_string.split("").reverse().join("")
}

const reverse = reverseWord('Hello')
console.log(reverse);
