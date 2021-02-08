//Creating basic string WOW
let string = "The revolution will not be televised";
console.log(string);

//Setting new variable equal to another copies value
let newString = string;
console.log(newString);

//Escaping characters in a string to avoid errors
let escString = 'I\'ve got not right to blah blah...'
console.log(escString);

//Concatenating strings
let one = "hello";
let two = ", how are you?";
console.log(one + two);

//Use functionality of concat
const button = document.querySelector('button');
button.onclick = function(){
    let name = prompt('what is your name');
    alert('Hello ' + name + ' nice to see you!');
}

//By default it concats numbers plus strings -- front242
console.log("front" + 242);

//check whether variable is a string or number -- string
let myDate = '19' + '67';
console.log(typeof myDate);

//Parsing a string into a number
let myString = "123";
let myNum = Number(myString);
console.log(typeof myNum);

//Parsing a number into a string
let myNum2 = 123;
let myString2 = myNum2.toString();
console.log(typeof myString2);

//Using template literals
let song = "Fight the Youth";
let score = 9;
let highestScore = 10;
let output = `I like the song "${song}". I gave it a score of ${score/highestScore * 100}%`;
console.log(output);

//Using template literals with complex expressions including ternary operators
let examScore = 45;
let examHighestScore = 70;
let examReport = `You scored ${examScore}/${examHighestScore}(${Math.round(examScore/examHighestScore*100)}%). ${examScore >= 49 ? 'Well done, you passed!' : 'Bad luck, you didn\'t pass this time.'}`;
console.log(examReport);

//Printing a string on two different lines
let lineBreakExample = "Wow this will \nbreak into two lines!";
console.log(lineBreakExample);

