#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
let score = 0;
let answers = [];
let questions = [
    {
        "question": "What is the capital of Pakistan",
        "answer": "Islamabad"
    },
    {
        "question": "how many province are there in Pakistan",
        "answer": "4"
    },
    {
        "question": "Which is the biggest province of pakistan",
        "answer": "Balochistan"
    },
    {
        "question": "When did Pakistan came into being(yyyy-mm-dd)?",
        "answer": "1947-08-14"
    },
    {
        "question": "dummy",
        "answer": "A"
    },
    {
        "question": "dummyB",
        "answer": "B"
    },
    {
        "question": "dummyC",
        "answer": "C"
    },
    {
        "question": "dummyD",
        "answer": "D"
    },
    {
        "question": "dummyE",
        "answer": "E"
    },
    {
        "question": "dummyF",
        "answer": "F"
    }
];
for (let i = 0; i < questions.length; i++) {
    let input = readline_sync_1.default.question(`${questions[i].question}`);
    if (input === questions[i].answer) {
        score++;
    }
}
console.log('Quiz Completed');
console.log('Your score : ', score);
if (score < 5) {
    console.log('Keep working hard');
}
else {
    console.log('Great! you can do much more');
}
