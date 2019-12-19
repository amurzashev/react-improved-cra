import styled from '@emotion/styled';

/** @component */
export default styled.button`
  margin: 0;
  padding: 0 20px;
  border-radius: 3px;
  color: white;
  background: ${props => props.theme.colors.primary};
  height: 34px;
`;
