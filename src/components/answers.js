import React from 'react';
import { RadioButton } from './radio-button';
import { Button } from './button';

export const Answers = ({ answers, onSelectAnswer, submitAnswer }) => {
  return (
    <React.Fragment>
      <fieldset>
        {/* TODO: add legend */}
        {answers.map((answer, i) => (
          <RadioButton
            key={answer}
            onChange={onSelectAnswer}
            label={answer}
            name="answers"
            value={answer}
          />
        ))}
      </fieldset>
      <Button onClick={submitAnswer}>Submit</Button>
    </React.Fragment>
  );
};
