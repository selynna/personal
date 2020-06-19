import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconWrapper } from './styled';

const icons = [
  {
    href: "mailto:ssun098@gmail.com",
    icon: "envelope"
  },
  {
    href: "https://twitter.com/selynnasun",
    icon: ['fab', 'twitter']
  },
  {
    href: "https://github.com/selynna",
    icon: ['fab', 'github']
  },
  {
    href: "https://linkedin.com/in/selynna",
    icon: ['fab', 'linkedin-in']
  },
  {
    href: "https://medium.com/@selynna",
    icon: ['fab', 'medium-m']
  },
];

export default props => (
  <FooterWrapper>
    <Icons>
      {icons.map((icon, id) => (
        <IconWrapper href={icon.href} target="_blank" key={id}>
          <FontAwesomeIcon icon={icon.icon} size="lg" color="#ffffff" />
        </IconWrapper>
      ))}
    </Icons>
    <MadeWith>
      &copy; 2020 Selynna Sun
    </MadeWith>
  </FooterWrapper>
);

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 3vh 0;
  background-color: #444545;
`;

const Icons = styled.div`
  display: flex;
`;

const MadeWith = styled.div`
  margin-top: 3vh;
  font-size: 0.8rem;
  color: #ffffff;
`;
