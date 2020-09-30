// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...

// uppercase first char by default
if (sentence != '') {
	sentence = sentence[0].toUpperCase() + sentence.substr(1);
}

// find all spaces, starting from 2nd character if exist, then uppercase the character following it
for (let x = 1; x < sentence.length; x++) {
	if (sentence[x] === ' ' && (x + 1) < sentence.length) {
		// (x + 1) < sentence.length; to check if space is at end of string
		sentence = sentence.substr(0, x+1) + sentence[x+1].toUpperCase() + sentence.substr(x + 2);
	}
}

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...

let parsed_money = '';
for (let x = 0; x < money.length; x++) {
	if (money[x] >= 0 && money[x] <= 9) {
		parsed_money += money[x];
	}
}

money = parsed_money;