import styled from 'styled-components';

export const StyledLink = styled.a`
  font-family: 'Proxima Nova Bold';
  text-decoration: none;
  color: #5f5fc2;

  &:hover {
    opacity: 0.6;
    color: #764ba2;
  }
`;

export const IconWrapper = styled.a`
  margin-right: calc(1vw + 8px);

  &:hover {
    opacity: 0.6;
    color: #764ba2;
  }
`;
