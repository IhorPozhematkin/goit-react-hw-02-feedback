import { ButtonItem, ButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => (
        <li key={option}>
          <ButtonItem type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </ButtonItem>
        </li>
      ))}
    </ButtonList>
  );
};
