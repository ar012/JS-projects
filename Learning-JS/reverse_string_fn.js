function reverseString(data){
    var reverseString = data.split('').reverse().join('');
    return reverseString;
}

var sentence = "Hello World";
var reversedSentence = reverseString(sentence);
console.log(reversedSentence);

var sentence2 = "Mathematics";
var reversedSentence2 = reverseString(sentence2);
console.log(reversedSentence2);
console.log(reversedSentence, reversedSentence2);

