import styled from 'styled-components';

export const LContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LView = styled.div`
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 680px;
  display: flex;
  flex-direction: column;
`;

type SliderProps = {
  transform: string;
  width: number;
};

export const LSlider = styled.div<SliderProps>`
  height: 100%;
  opacity: 1;
  display: flex;
  transition: transform 0.6s ease;
  transform: ${props => props.transform};
  width: ${props => `${props.width}px`};
`;

export const LItem = styled.div`
  position: relative;
  width: 680px;
  height: 100%;
`;

export const LIndicators = styled.div`
  display: flex;
  justify-content: center;
  padding: 4px;
`;

export const LIndicator = styled.button<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  display: inline-block;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  opacity: ${props => (props.active ? '1' : '0.4')};
  &:hover {
    opacity: 1;
  }
`;

export const LDot = styled.div`
  background-color: gray;
  opacity: inherit;
  border-radius: 8px;
  height: 8px;
  width: 8px;

  &:hover {
    opacity: inherit;
  }
`;
