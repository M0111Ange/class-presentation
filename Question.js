// Write a function that counts the number of vowels in a string
// Examples:
//     1. "hello" shall return2 vowels
//     2. "Kigali" shall return3 vowels
//     3. "Airport" shall return 3 vowels
//     4. "Hhhh" shall return 4 vowels


function countVowels(vowel){
    var vowels = ["i","u","o","a","e"];
    var counts = 0;
    var lowercase = vowel.toLowerCase()
for(i=0; i<vowel.length; i++){
    if(vowels.includes(lowercase[i])){
        counts++;    }
}
return counts
}

console.log(countVowels('mukundente'));