import React, { Component } from 'react';
import './App.css';
import { Header } from './components/header';
import { Text } from './components/text';
import { Category } from './containers/choose-category';
import { Answers } from './components/answers';
import { Score } from './components/score';

const categories = [
  { name: 'any', value: 'any' },
  { name: 'general knowledge', value: '9' },
  { name: 'entertainment:books', value: '10' },
  { name: 'entertainment:film', value: '11' },
  { name: 'entertainment:music', value: '12' },
  { name: 'entertainment:musicals & theatre', value: '13' },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      categories,
      currentCategory: 'any',
      answers: [],
      correctAnswer: '',
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
        const question = data && data.results[0] && data.results[0].question;
        const correctAnswer =
          data && data.results[0] && data.results[0].correct_answer;
        const incorrectAnswers =
          data && data.results[0] && data.results[0].incorrect_answers;
        // TODO: scramble this
        // TODO: change the data structure to an object with props answer, correct (boolean)
        const answers = [correctAnswer, ...incorrectAnswers];
        this.setState({
          question,
          correctAnswer,
          answers,
        });
      });
  };

  onSelectAnswer = e => {
    this.setState({
      chosenAnswer: e.target.value,
    });
  };

  submitAnswer = () => {
    if (this.state.question === '') {
      alert('please select a question');
    } else if (this.state.chosenAnswer !== null) {
      const submittedAnswer = this.state.chosenAnswer;
      if (submittedAnswer === this.state.correctAnswer) {
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
        <Header>Think Drink!</Header>
        {this.state.question ? null : (
          <Category getQuestion={this.getQuestion} />
        )}
        <Text>{this.state.question}</Text>
        <Answers
          onSelectAnswer={this.onSelectAnswer}
          answers={this.state.answers}
          submitAnswer={this.submitAnswer}
        />
        <Score>
          <h4>Score:</h4>
          {this.state.score}
        </Score>
      </div>
    );
  }
}

export default App;

// displaying answers
// choose choose an answer (save the answer, whether its correct or not)
// go back to dropdown state
