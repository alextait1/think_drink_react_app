import React from 'react';
import { RadioButton } from './radio-button';
import { Button } from './button';

export const Answers = ({ answers, onSelectAnswer, submitAnswer }) => {
  console.log(answers);
  return (
    <React.Fragment>
      <fieldset>
        <legend>Select an answer</legend>
        {/* TODO: add legend */}
        {answers.map((answer, i) => (
          <RadioButton
            key={answer.answer}
            onChange={onSelectAnswer}
            label={answer.answer}
            name="answers"
            value={JSON.stringify(answer)}
          />
        ))}
      </fieldset>
      <Button onClick={submitAnswer}>Submit</Button>
    </React.Fragment>
  );
};
