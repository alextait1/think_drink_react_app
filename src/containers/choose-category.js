import React from 'react';
import { Dropdown } from '../components/dropdown';
import { Button } from '../components/button';

const categories = [
  { name: 'any', value: 'any' },
  { name: 'general knowledge', value: '9' },
  { name: 'books', value: '10' },
  { name: 'film', value: '11' },
  { name: 'music', value: '12' },
  { name: 'art', value: '25' },
  { name: 'musicals & theatre', value: '13' },
  { name: 'television', value: '14' },
  { name: 'video games', value: '15' },
  { name: 'board games', value: '16' },
  { name: 'cartoon animations', value: '32' },
  { name: 'Japanese animi & manga', value: '31' },
  { name: 'comics', value: '29' },
  { name: 'science & nature', value: '17' },
  { name: 'computers', value: '18' },
  { name: 'mathematics', value: '19' },
  { name: 'gadgets', value: '30' },
  { name: 'mythology', value: '20' },
  { name: 'sports', value: '21' },
  { name: 'vehicles', value: '28' },
  { name: 'geography', value: '22' },
  { name: 'history', value: '23' },
  { name: 'politics', value: '24' },
  { name: 'celebrities', value: '26' },
  { name: 'animals', value: '27' },
];

export class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'any',
      question: '',
      categories,
    };
  }

  handleChooseCategory = e => {
    this.setState({ category: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <Dropdown
          options={this.state.categories}
          onChange={this.handleChooseCategory}
        />
        <Button onClick={this.props.getQuestion}>Get Question!</Button>
      </React.Fragment>
    );
  }
}
