import styled from 'styled-components';

export const StyledLink = styled.a`
  transition: background-position 300ms ease;
  background: linear-gradient(
    to right, 
    ${props => props.color ? props.color: '#7f60f0'} 50%,
    #5f5fc2 50%
  );
  background-clip: text;
  background-position: 100%;
  background-size: 200% 100%;
  font-family: 'Proxima Nova Bold';
  text-decoration: none;
  color: #4c5eaf;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    background-position: 0 100%;
  }
`;

export const IconWrapper = styled.a`
  margin-right: calc(1vw + 8px);

  &:hover {
    opacity: 0.6;
    color: #764ba2;
  }
`;
