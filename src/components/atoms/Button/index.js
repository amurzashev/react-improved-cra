import styled from '@emotion/styled';

const selectColor = props => props.color
  ? props.theme.colors[props.color]
  : props.theme.colors.primary;

/** @component */
export default styled.button`
  margin: 0;
  padding: 0 20px;
  border-radius: 3px;
  border: 1px solid ${selectColor};
  cursor: pointer;
  color: white;
  background: ${selectColor};
  height: 38px;
  font-size: 0.9rem;
  outline: none;
`;
