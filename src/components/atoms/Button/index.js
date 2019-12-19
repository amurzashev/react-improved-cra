import styled from '@emotion/styled';

/** @component */
export default styled.button`
  margin: 0;
  padding: 0 20px;
  border-radius: 3px;
  border: 1px solid ${props => props.theme.colors.primary};
  cursor: pointer;
  color: white;
  background: ${props => props.theme.colors.primary};
  height: 38px;
  font-size: 0.9rem;
  outline: none;
`;
