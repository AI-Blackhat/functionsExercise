// Functions Exercise

// 1
function fozzieBear(){
    console.log(`Wocka Wocka!`);   
}
// Runs/executes function
fozzieBear();

console.log(`=`.repeat(25));

// 2
function beaker(speak){
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
}
// Parameter can be used multiple times throughout a function
beaker(`Meep`);

console.log(`=`.repeat(25));

// or

function beaker(speak){
    console.log(speak.repeat(4));
}
// Parameter can be used multiple times throughout a function
beaker(`Meep`);

// or
console.log(`=`.repeat(25));

function beaker(speak){
    console.log(`${speak}, ${speak}, ${speak}, ${speak}`);
    }
    // Parameter can be used multiple times throughout a function
beaker(`Meep`);

console.log(`=`.repeat(25));

// 3
function muppetShow(a, b){
    if (a === "Muppet" && b === `Show`){
        return "It's time to play the music. It's time to light the lights."; 
    }
    return ``;
}
console.log(muppetShow("Muppet", "Show"));
console.log(muppetShow("Hi", "Bye"));
// Nothing show in terminal display when "Hi", "Bye" is put in console log, but there is a blank line.
// Note: From my own analysis, it doesn't matter if backtics ` or quotation marks are used "".

console.log(`=`.repeat(25));

// 4

function kermit(){
    return "Kermit The Frog"
}
console.log("Kermit The Frog");
// Note this solution works without a semicolon after return "Kermit The Frog"

// or

function kermit(){
    console.log("Kermit The Frog");
}
kermit();

// or

function kermit(quote="Kermit the Frog"){
    console.log(quote);
}
kermit();

// or
/*
function kermit(){
    return "Kermit The Frog"
}
let kermitIs=kermit();
console.log(kermitIs);
*/
// Note: If I don't comment out this solution, I only get 2 "Kermit the Frog" output displays in terminal. Even though there are 4 solutions (at this point), I only get 2.

// or

function kermit(){
    return "Kermit The Frog";
}
console.log(kermit());

// Note: If I don't comment out this solution, I get only 2 solution displays of "Kermit the Frog" in terminal.

// 5
function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    }
    return false;
} 
console.log(muppetShowSeasons(5));// true with 5
console.log(muppetShowSeasons(3));// alse without 5
// Note: else not needed.

console.log(`=`.repeat(25));
// or

// Same function with else added but not needed.
function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    } else {
    return false;
    }
} 
console.log(muppetShowSeasons(5));// true with 5
console.log(muppetShowSeasons(3));// false without 5

// 6
const manOrMuppet = function(){
    console.log("Am I a man or am I a Muppet?");
}
manOrMuppet();

console.log(`=`.repeat(25));

// 7

rainbowConnection = () => `Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`
console.log(rainbowConnection());

console.log(`=`.repeat(25));
// or

rainbowConnection = () => console.log(`Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`);
rainbowConnection();

console.log(`=`.repeat(25));


// 8
// No. If a let or const variable is created/declared inside a function, loop, or conditional, the value of it cannot be accessed outside of the function, loop, or conditional. When a variable is declared inside a function, loop, or conditional it is only accessible within that function, loop, or conditional and cannot be used outside that function, loop, or conditional.

// 9
// Yes

console.log(`=`.repeat(25));

// Bonus
// 10a
const newMuppetMovies = ["The Muppets", "Muppets Most Wanted"];

// 10b
// function(x) is anonymous because it doesn't have a name.

const upperMovies = newMuppetMovies.map(function(x){
    return x.toUpperCase();
});
console.log(upperMovies);

//or
/*
const upperMovies = newMuppetMovies.map(movie => movie.toUpperCase());
console.log(upperMovies);
*/
console.log(`=`.repeat(25));
// 11a
const oldMuppetMovies = ["The Muppet Movie", "The Muppets Take Manhattan", "The Great Muppet Caper", "The Muppet Christmas Carol", "Muppet Treasure Island", "Muppets From Space"];

// 11b
const twoMovies = oldMuppetMovies.filter(a => a.length === 22);
console.log(twoMovies);

// 12a
const charactersOne = ["Statler", "Waldorf"];

// 12b
const charactersTwo = ["The Swedish Chef", "Animal", "Rowlf"];

// 12c
// Note: Math must be capitalized because that is the syntax
randomMuppet = (characters) => {
    console.log(`${characters[Math.floor(Math.random() * characters.length)]}`);
}

// 12d
randomMuppet(charactersOne);
randomMuppet(charactersTwo);

// or

console.log(`=`.repeat(25));

// 13

caps = string => {
    let chars = string.toLowerCase().split(``);
    for (i=0; i < chars.length; i+=2){
         chars[i] = chars[i].toUpperCase();
    }
     console.log(chars.join(``));
}
caps(`Hello World`);

// or

caps = (string) => {
    return string.split(``).map((v, i)=> i % 2 ? v.toLowerCase() : v.toUpperCase()).join(``);
}
console.log(caps(`Hello World`));

// or

caps = string => {
    let newString = ``;
    for (i = 0; i < string.length; i++){
        if (i % 2 === 0){
            newString += string[i].toUpperCase();
        } else {
            newString += string[i].toLowerCase();
       }
    }
    return newString;
} 
console.log(caps(`Hello World`));

console.log(`=`.repeat(25));

//  EXTRA BONUS
// The transformation on Extra Bonus is based upon "count".
// The index doesn't determine the transformation
// This one is moving through the index position but it doesn't add 1 to the value of count.
caps = string => {
    let count = 0;
    let newString = ``;
    for (i = 0; i < string.length; i++){
        if (string[i] === ` `){
            newString += ` `;
        } else if (count % 2 === 0){
        newString += string[i].toUpperCase();
        count++;
        } else {
        newString += string[i].toLowerCase();
        count++;
        }
    }
    return newString;
}
console.log(caps(`Hello World`));