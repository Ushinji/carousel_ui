import styled from 'styled-components';
import Icon from '../../../atoms/Icon';

export const LButton = styled.button`
  display: inline-block;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: gray;
  transition: 0.3s;
  border-radius: 50%;
  color: #ffffff;
  font-size: 16px;

  &:hover {
    background-color: gray;
  }

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;

export const LIcon = styled(Icon)`
  font-size: 24px;
`;

