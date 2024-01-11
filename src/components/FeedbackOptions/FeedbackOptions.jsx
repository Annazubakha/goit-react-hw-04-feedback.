import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.btn_wrapper}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;
