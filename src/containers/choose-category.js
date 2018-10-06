import React from 'react';
import { Dropdown } from '../components/dropdown';
import { Button } from '../components/button';

// TODO: fill in more categories
const categories = [
  { name: 'any', value: 'any' },
  { name: 'general knowledge', value: '9' },
  { name: 'entertainment:books', value: '10' },
  { name: 'entertainment:film', value: '11' },
  { name: 'entertainment:music', value: '12' },
  { name: 'entertainment:musicals & theatre', value: '13' },
];

export class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'any',
      question: '',
      categories,
    };
    //do I need to bind this? 👇🏼 (no you dont! block scoping!)
    this.handleChooseCategory = this.handleChooseCategory.bind(this);
  }

  handleChooseCategory = e => {
    //do I need to prevent default? (no you dont! default behaviour is fine here, might not be for submit a form)
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
