// Important Note - No Built-in functions to be used
// Progression 1: Names and Input
var Prograd_1 = prompt("Enter driver's name: ");
console.log(" The driver name is :" + Prograd_1);
document.write(`The driver name is : ${Prograd_1} <br>`);

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
var Prograd_2 = prompt("Enter navigator's name: ");
console.log(" The navigator name is :" + Prograd_2);
document.write(`The navigator name is : ${Prograd_2} <br>`);
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var len1 = Prograd_1.length;
var len2 = Prograd_2.length;
if (len1 > len2) {
    console.log(`The driver has the longest name, it has ${len1} characters.`);
    document.write(`The driver has the longest name, it has ${len1} characters.<br>`);
} else if (len1 < len2) {
    console.log(`The navigator has the longest name, it has ${len2} characters.`);
    document.write(`The navigator has the longest name, it has ${len2} characters.<br>`);
} else {
    console.log(`Wow, you both have equally long names, ${len1} characters.<br>`);
    document.write(`Wow, you both have equally long names, ${len2} characters.<br>`);
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels

var a = 0,
    e = 0,
    i = 0,
    o = 0,
    u = 0,
    n = len1 + len2;
for (let l = 0; l <= n; l++) {
    if (Prograd_1[l] == 'a' || Prograd_1[l] == 'A') {
        a++;

    }
    if (Prograd_1[l] == 'e' || Prograd_1[l] == 'E') {
        e++;

    }
    if (Prograd_1[l] == 'i' || Prograd_1[l] == 'I') {
        i++;

    }
    if (Prograd_1[l] == 'o' || Prograd_1[l] == 'O') {
        o++;

    }
    if (Prograd_1[l] == 'u' || Prograd_1[l] == 'U') {
        u++;

    }
    if (Prograd_2[l] == 'a' || Prograd_2[l] == 'A') {
        a++;
    }
    if (Prograd_2[l] == 'e' || Prograd_2[l] == 'E') {
        e++;
    }
    if (Prograd_2[l] == 'i' || Prograd_2[l] == 'I') {
        i++;
    }
    if (Prograd_2[l] == 'o' || Prograd_2[l] == 'O') {
        o++;
    }
    if (Prograd_2[l] == 'u' || Prograd_2[l] == 'U') {
        u++;
    }

}
console.log("Total number of vowels list")
document.write(`Total number of list <br>`);

if (a > 0) {
    console.log(`a : ${a}`);
    document.write(`a : ${a}<br>`);
}
if (e > 0) {
    console.log(`e : ${e}`);
    document.write(`e : ${e}<br>`);
}

if (i > 0) {
    console.log(`i : ${i}`);
    document.write(`i : ${i}<br>`);
}
if (o > 0) {
    console.log(`o : ${o}`);
    document.write(`o : ${o}<br>`);
}
if (u > 0) {
    console.log(`u : ${u}`);
    document.write(`u : ${u}<br>`);
} else {
    console.log("No vowels")
    document.write(`No vowels. <br>`);
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var c = 0;
var d = 0;
for (let l = 0; l < len1; l++) {
    if (Prograd_1.charCodeAt(l) < 97) {
        c = c + 1;
    } else {
        d = d + 1;
    }
}
console.log("UpperCase : " + c);
console.log("LowerCase : " + d);
document.write("UpperCase : " + c + ". <br>");
document.write("LowerCase : " + d + ". <br>");


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
var str1 = "";
for (let l = 0; l < len1; l++) {
    str1 = str1 + " " + Prograd_1.charAt(i);
}
console.log(str1.toUpperCase());
document.write(`Driver's name in capital: ${str1.toUpperCase()} <br>`);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
var str2 = "";
for (let j = len2; j >= 0; j--) {
    str2 = str2 + Prograd_2.charAt(j);
}
console.log(str2);
document.write(`Navigator's name in reverse order: ${str2}<br>`);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(`${str1} ${Prograd_2}`);
document.write(`${str1} ${Prograd_2}<br><br>`);

console.log(`${Prograd_2} ${str1}`);
document.write(`${Prograd_2} ${str1}<br>`);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (Prograd_1.charCodeAt(0) < Prograd_2.charCodeAt(0)) {
    console.log("The driver's name goes first.");
    document.write("The driver's name goes first.<br>");
} else if (Prograd_1.charCodeAt(0) > Prograd_2.charCodeAt(0)) {
    console.log("Yo, the navigator goes first definitely.");
    document.write("Yo, the navigator goes first definitely.<br>");
} else {
    console.log("What?! You both have the same name?");
    document.write("What?! You both have the same name?<br>");
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
var par = " et Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit voluptates corrupti magnam velit eveniet explicabo rerum et. Sequi placeat a eos consequuntur porro fuga, quasi ducimus temporibus eveniet laboriosam incidunt reprehenderit. Maiores architecto repellendus illum maxime voluptas rerum, hic aperiam illo dolore, facilis sit placeat suscipit incidunt quasi pariatur qui nemo dicta reiciendis eos fugit? Tempore et dolore sit sed quam molestiae!Dignissimos, corrupti odio voluptatem in eum rerum atque delectus sunt nesciunt officiis alias quam minus quisquam repellat esse, quo nihil possimus laboriosam eveniet laudantium tempore fugit aliquid excepturi impedit! Repellat.";

var p = par.split(" ");
var len = par.split(" ").length;
let count = 0;
for (var l = 0; l < len; l++) {
    if (p[i] == "et" || p[i] == "et.") {
        count++;
    }
}
document.write("Total number of words in para : " + len);
console.log("Total number of words in para : " + len);
document.write(" <br>");
document.write("Number of time 'et' word appears : " + count + "<br>");
console.log("Number of time 'et' word appears : " + count);
document.write(" <br>");


// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

var phraseToCheck = "taco, cat";
one = phraseToCheck.replace(/,/g, "");
var two = one.split(" ");
var t = two.join("");
var str = "";

//console.log(t.length);
//document.write(t.length);
let lenstr = t.length
for (let n = lenstr - 1; n >= 0; n--) {
    str = str + t.charAt(n);
}

if (t == str) {
    console.log("Palindrome.");
    document.write(t + " is a Palindrome.<br>");

} else {
    console.log("Not a Palindrome.");
    document.write(t + " is not a Palindrome.<br>");
}