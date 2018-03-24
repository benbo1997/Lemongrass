import React from 'react';

export var DAILY_QUIZ_GOAL = 5;

export default questions = [
  {
    title: "QUIZ NUMBER 1",
    description: "The first quiz",
    id: 1,
    key: '1',
    content: [
      {
        question: 'What is the capital of England?',
        correctid: 0,
        explanation: "London is the capital city of England.",
        answers: [
          {
            text: 'London',
            id: 0,
            key: '1',
          },
          {
            text: 'Edinburgh',
            id: 1,
            key: '2',
          },
          {
            text: 'E',
            id: 2,
            key: '3',
          },
          {
            text: 'France',
            id: 3,
            key: '4',
          },
        ]
      },
      {
        question: 'What is Ben\'s favourite colour?',
        correctid: 3,
        explanation: "Contrary to popular belief, Ben does not hold a ranking over his favourite colours.",
        answers: [
          {
            text: 'Blue',
            id: 0,
            key: '1',
          },
          {
            text: 'Red',
            id: 1,
            key: '2',
          },
          {
            text: 'Green',
            id: 2,
            key: '3',
          },
          {
            text: 'Ben doesn\'t see colour',
            id: 3,
            key: '4',
          },
        ]
      },
    ]
  },

  {
    title: "QUIZ NUMBER 2",
    description: "The second quiz",
    id: 2,
    key: '2',
    content: [
      {
        question: 'What is the capital of Evil?',
        correctid: 2,
        explanation: 'E is the capital letter of Evil',
        answers: [
          {
            text: 'London',
            id: 0,
            key: '1',
          },
          {
            text: 'Edinburgh',
            id: 1,
            key: '2',
          },
          {
            text: 'E',
            id: 2,
            key: '3',
          },
          {
            text: 'France',
            id: 3,
            key: '4',
          },
        ]
      },

      {
        question: 'What is Ben\'s favourite boyband?',
        correctid: 0,
        explanation: 'Apparently Ben listens to Blue now',
        answers: [
          {
            text: 'Blue',
            id: 0,
            key: '1',
          },
          {
            text: 'Red',
            id: 1,
            key: '2',
          },
          {
            text: 'Green',
            id: 2,
            key: '3',
          },
          {
            text: 'Purple',
            id: 3,
            key: '4',
          },
          {
            text: 'Ben doesn\'t see colour',
            id: 4,
            key: '5',
          },
        ]
      },
    ]
  }
]