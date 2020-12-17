import { fireEvent, render, cleanup } from 'test/testUtils';
import Button from './index';

afterEach(cleanup);

describe('Button', () => {
  const handleClick = jest.fn();
  describe('Button', () => {
    test('should be render button with label', () => {
      const firstLabel = 'button';
      const { getByText, rerender } = render(
        <Button label={firstLabel} onClick={handleClick} />
      );
      const button = getByText(firstLabel);
      expect(button).toBeInTheDocument();

      const secondLabel = 'submit';
      rerender(<Button label={secondLabel} onClick={handleClick} />);
      expect(getByText(secondLabel)).toBeInTheDocument();
    });

    test('shoud be fired handleClick when button clicked', () => {
      const { getByText } = render(
        <Button label={'submit'} onClick={handleClick} />
      );
      const button = getByText('submit');
      expect(handleClick).toHaveBeenCalledTimes(0);
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
