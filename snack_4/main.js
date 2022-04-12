/* 
SNACK 4
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const letters = ['a','b','c','d','e','f','g','h','i','l'];

const newArray = []

/**
 * 
 * @param {array} array_1 
 * @param {array} array_2 
 */
function mergeArray(array_1, array_2) {
    const newArray = []
    if (array_1.length === array_2.length) {
        
        array_1.forEach((element, index) => {
            newArray.push(element)
            newArray.push(array_2[index])
        }
    )}
    return newArray
}

console.log(mergeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ['a','b','c','d','e','f','g','h','i','l']));