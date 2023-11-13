import { ButtonItem, ButtonList } from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => (
        <li key={nanoid()}>
          <ButtonItem type="button" onClick={onLeaveFeedback}>
            {option}
          </ButtonItem>
        </li>
      ))}
    </ButtonList>
  );
};
