var inquirer = require('inquirer')
var Word = require('./Word.js');

var words = ['jeff', 'john', 'rhyna'];

var wordToPlay = words[Math.floor(Math.random()*words.length)];

var wordObject = new Word(wordToPlay);
wordObject.pushLetters();
console.log(wordObject.display());

function askLetter(){
	inquirer.prompt([{
		type: "input",
		name: "guess",
		message: "Pick a letter. If finshed type no"},
		]).then(function(data){
			if(data.guess != 'no'){
			wordObject.updateLetter(data.guess);
			//wordObject.display();
			console.log(wordObject.display());

			askLetter();
			}
	});
}

askLetter();