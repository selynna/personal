import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledLink, IconWrapper } from './styled';

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
  <AboutContainer>
    <AboutWrapper>
      <AboutHeader>
        Hi, I'm Selynna!
      </AboutHeader>
      <AboutMe>
          I'm a 4th year at {" "}
          <StyledLink
            href="https://calpoly.edu"
            color="#154734"
            target="_blank"
          >
            Cal Poly SLO 
          </StyledLink>
          {" "} studying computer science. This summer, I'll be returning to the
          Revenue Productivity team at{" "}
          <StyledLink
            href="https://twitter.com"
            color="#1da1f2"
            target="_blank"
          >
            Twitter
          </StyledLink>
          , whom I interned with the year prior. 
        </AboutMe>
        <AboutMe>
          In the past, I've worked for{" "}
          <StyledLink
            href="https://twitter.com"
            color="#1da1f2"
            target="_blank"
          >
            Twitter
          </StyledLink>
          ,{" "}
          <StyledLink
            href="https://salesforce.com"
            color="#009edb"
            target="_blank"
          >
            Salesforce
          </StyledLink>
          , {" "}
          <StyledLink
            href="https://intuit.com"
            color="#365ebf"
            target="_blank"
          >
            Intuit
          </StyledLink>
          , {" "}
          <StyledLink 
            href="https://iFixit.com"
            color="#006ae9"
            target="_blank"
          >
            iFixit
          </StyledLink>
          , and {" "}
          <StyledLink
            href="https://hackclub.com"
            color="#e42d42"
            target="_blank"
          >
            Hack Club
          </StyledLink>
          . I'm also fairly involved with hackathons and computer science events
          - I founded{" "}
          <StyledLink
            href="https://losaltoshacks.com"
            color="#3fb2ff"
            target="_blank"
          >
            Los Altos Hacks 
          </StyledLink>
          {" "} and {" "}
          <StyledLink
            href="https://slohacks.com"
            color="#e5975e"
            target="_blank"
          >
            SLO Hacks
          </StyledLink>
          , organized {" "}
          <StyledLink
            href="https://hshacks.com"
            color="#3d9bcf"
            target="_blank"
          >
            HSHacks
          </StyledLink>
          {" "} and {" "}
          <StyledLink
            href="https://codeday.org"
            color="#ff5d63"
            target="_blank"
          >
            CodeDay Bay Area
          </StyledLink>
          , and currently work as a hackathon coach for{" "}
          <StyledLink
            href="https://mlh.io"
            color="#c53c02"
            target="_blank"
          >
            Major League Hacking
          </StyledLink>.
      </AboutMe>
      <AboutIcons>
        {icons.map((icon, id) => (
          <IconWrapper href={icon.href} target="_blank" key={id}>
            <FontAwesomeIcon icon={icon.icon} size="lg" color="#5f5fc2" />
          </IconWrapper>
        ))}
      </AboutIcons>
    </AboutWrapper>
    <ImgContainer>
      <Img src="./pic.jpg" alt="profile" />
    </ImgContainer>
  </AboutContainer>
);

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35vw;
  height: 100vh;

  @media (pointer: coarse), (max-aspect-ratio: 5/5) {
    width: 80vw;
  }
`;

const AboutHeader = styled.h1`
  display: flex;
  margin: 0;
  background: linear-gradient(to right top, #667eea, #764ba2);
  font-size: 48px;
  font-family: 'Proxima Nova Bold';
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

const AboutMe = styled.div`
  margin: 1vh 0;
`;

const AboutIcons = styled.div`
  display: flex;
  margin-top: 3vh;
`;

const ImgContainer = styled.div`
  width: 30vw;
  max-width: 300px;

  @media (pointer: coarse), (max-aspect-ratio: 1/1) {
    display: none;
  }
`;

const Img = styled.img`
  border-radius: 20px;
  max-width: 100%;
  max-height: 100%;
`;
