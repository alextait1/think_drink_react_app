import React, { Component } from 'react';
import './App.css';
import { Header } from './components/header';
import { Text } from './components/text';
import { Category } from './containers/choose-category';
import { Answers } from './components/answers';
import { Score } from './components/score';
import { shuffle } from './utils';
import { getTranslationContext } from './contexts/translations';

//TODO: add all categories back
const categories = [
  { name: 'any', value: 'any' },
  { name: 'general knowledge', value: '9' },
  { name: 'books', value: '10' },
  { name: 'film', value: '11' },
  { name: 'music', value: '12' },
  { name: 'musicals & theatre', value: '13' },
  { name: 'television', value: '14' },
  { name: 'video games', value: '15' },
  { name: 'board games', value: '16' },
  { name: 'science & nature', value: '17' },
  { name: 'computers', value: '18' },
  { name: 'mathematics', value: '19' },
  { name: 'mythology', value: '20' },
  { name: 'sports', value: '21' },
  { name: 'geography', value: '22' },
  { name: 'history', value: '23' },
  { name: 'politics', value: '24' },
  { name: 'art', value: '25' },
  { name: 'celebrities', value: '26' },
  { name: 'animals', value: '27' },
  { name: 'vehicles', value: '28' },
  { name: 'comics', value: '29' },
  { name: 'gadgets', value: '30' },
  { name: 'japanese anime & manga', value: '31' },
  { name: 'cartoon & animations', value: '32' },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      categories,
      currentCategory: 'any',
      answers: [],
      chosenAnswer: null,
      score: 0,
    };
  }

  getQuestion = () => {
    const url =
      this.state.currentCategory === 'any'
        ? 'https://opentdb.com/api.php?amount=1'
        : `https://opentdb.com/api.php?amount=1&category=${
            this.state.currentCategory
          }&difficulty=easy&type=multiple`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const {
          question,
          correct_answer: correctAnswer,
          incorrect_answers: incorrectAnswers,
          type,
        } = data.results[0];
        //TODO: pull this map function out of the array and then spread the results into it
        const answers = [
          {
            answer: correctAnswer,
            correct: true,
          },
          ...incorrectAnswers.map(incorrectAnswer => ({
            answer: incorrectAnswer,
            correct: false,
          })),
        ];
        this.setState({
          question,
          answers:
            type === 'multiple' ? shuffle(answers, Math.random()) : answers,
        });
      });
  };

  onSelectAnswer = e => {
    this.setState({
      chosenAnswer: JSON.parse(e.target.value),
    });
  };

  submitAnswer = () => {
    if (this.state.question === '') {
      alert('please select a question');
    } else if (this.state.chosenAnswer !== null) {
      const submittedAnswer = this.state.chosenAnswer;
      if (submittedAnswer.correct) {
        this.setState({ score: this.state.score + 1 });
      } else {
        this.setState({ score: this.state.score - 1 });
      }
      this.resetQuestion();
    } else alert('please select an answer');
  };

  resetQuestion = () => {
    this.setState({
      question: '',
      categories,
      currentCategory: 'any',
      answers: [],
      correctAnswer: '',
      chosenAnswer: null,
    });
  };

  render() {
    return (
      <div>
        <Header>{this.context.appTitle}</Header>
        {this.state.question ? null : (
          <Category getQuestion={this.getQuestion} />
        )}
        <Text>{this.state.question}</Text>
        {this.state.question ? (
          <Answers
            onSelectAnswer={this.onSelectAnswer}
            answers={this.state.answers}
            submitAnswer={this.submitAnswer}
          />
        ) : null}
        <Score>
          <h4>Score:</h4>
          {this.state.score}
        </Score>
      </div>
    );
  }
}
App.contextType = getTranslationContext('fr');

export default App;
