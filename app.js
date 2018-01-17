var inquirer = require('inquirer');
var isLetter = require('is-letter');

var TargetWord = require('./word.js');
var gameWords = require('./game.js');

var displayWords = gameWords.nextWord.hangman;

var hangman = {
    wordBank: gameWords.nextWord.wordList,
    guessesRemaining: 10,
    guessedLetters: [],
    display: 0,
    currentWord: null,
    startGame: function() {
        var that = this;
        
    }
}