import React, { useState } from 'react';
import s from './App.module.css';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const [points, setPoints] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = state => {
    setPoints(prevState => ({ ...prevState, [state]: prevState[state] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(points).reduce((acc, value) => acc + value, 0);
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((points.good / total) * 100);
  };

  const total = countTotalFeedback();
  const persantage = countPositiveFeedbackPercentage();
  return (
    <div className={s.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(points)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={points.good}
            neutral={points.neutral}
            bad={points.bad}
            total={total}
            positivePercentage={persantage}
          />
        )}
      </Section>
    </div>
  );
};
