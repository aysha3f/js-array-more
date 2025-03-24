// ### Task 1

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
  
const reversedColors = [];
for(const color of colors){
reversedColors.unshift(color)
}
// console.log(reversedColors)

// ### Task 2
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
    }
}
// console.log(evenNumbers);

// ### Task 3

const names = ['Tom', 'Tim', 'Tin', 'Tik'];
 let result = '';
for (const name of names){
    result = result + name;
}
// console.log(result);

// ### Task 4
const statement = 'I am a hard working person';
const results = statement.split(' ').reverse().join();
console.log(results);
