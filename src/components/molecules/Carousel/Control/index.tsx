import * as React from 'react';
import { LButton, LIcon } from './layout';

type Direction = 'next' | 'prev';

type Props = {
  direction: Direction;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Control: React.FC<Props> = ({ direction, ...props }) => {
  const iconName = React.useMemo(() => {
    switch (direction) {
      case 'next': {
        return 'keyboard_arrow_right';
      }
      case 'prev': {
        return 'keyboard_arrow_left';
      }
      default: {
        const strangeValue: never = direction;
        throw new Error(`${strangeValue} is invalid Direction.`);
      }
    }
  }, [direction]);

  return (
    <LButton type="button" {...props}>
      <LIcon>{iconName}</LIcon>
    </LButton>
  );
};

export default Control;
