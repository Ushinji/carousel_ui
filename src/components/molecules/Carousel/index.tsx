import * as React from 'react';
import {
  LContainer,
  LView,
  LSlider,
  LItem,
  LIndicators,
  LIndicator,
  LDot,
} from './layout';
import useCarousel from './hooks';
import Control from './Control';

type Props = {
  children: React.ReactNodeArray;
  itemWidth?: number;
};

const Carousel: React.FC<Props> = ({ children, itemWidth=680 }) => {
  const {
    nextButtonProps,
    prevButtonProps,
    sliderStyle,
    page,
    onClickIndicator,
  } = useCarousel(1, children.length, itemWidth);

  return (
    <LContainer>
      <Control direction="prev" {...prevButtonProps} />
      <LView width={itemWidth}>
        <LSlider {...sliderStyle}>
          {children.map((node, index) => {
            return <LItem key={`carousel-item-${index}`}>{node}</LItem>;
          })}
        </LSlider>
        <LIndicators>
          {children.map((_, index) => {
            return (
              <LIndicator
                key={`carousel-indicator-${index}`}
                active={index + 1 === page}
                onClick={() => onClickIndicator(index + 1)}
              >
                <LDot />
              </LIndicator>
            );
          })}
        </LIndicators>
      </LView>
      <Control direction="next" {...nextButtonProps} />
    </LContainer>
  );
};

export default Carousel;
