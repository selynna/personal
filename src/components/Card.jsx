import React from 'react';
import styled from 'styled-components';

let getColor = ({ year, type }) => {
  if (year) {
    switch (year) {
      case '2016':
        return '#4a5b8f';
      case '2017':
        return '#45a39d';
      case '2018':
        return '#518268';
      case '2019':
        return '#ab247c';
      case '2020':
        return '#8a4ba3';
      default:
        return '#888';
    }
  } else if (type) {
    switch (type) {
      case 'feature':
        return '#00c407';
      case 'talk':
        return '#e6917c';
      case 'workshop':
        return '#8d9103';
      case 'tutorial':
        return '#484963';
    }
  }
}

export default props => (
  <CardWrapper href={props.link} target="_blank">
    <CardContent>
      <CardHeader>
        {props.title}
      </CardHeader>
      <CardSubHeader>{props.content}</CardSubHeader>
      <CardTags>
        <CardTag color={getColor({ year: props.year })}>
          {props.year}
        </CardTag>
        <CardTag color={getColor({ type: props.type })}>
          {props.type}
        </CardTag>
      </CardTags>
    </CardContent>
  </CardWrapper>
);

const CardWrapper = styled.a`
  flex: 1;
  display: inline-block;
  margin: 2vh 1vw;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  min-width: 300px;
  max-width: 300px;
  min-height: 100px;
  background-color: #ffffff;
  text-decoration: none;
  color: #444545;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    width: 100%;
    height: 100%;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    transform: scale(1.03, 1.03);
    -webkit-transform: scale(1.03, 1.03);
  }

  &:hover::after {
    opacity: 1;
  }

  @media (pointer: coarse), (max-aspect-ratio: 1/1) {
    max-width: 70vw;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
`;

const CardHeader = styled.span`
  display: inline-block;
  margin: 2.5vh 2vw 1vh 2vw;
  font-size: 1.2rem;
  font-family: 'Proxima Nova Bold';

  @media (pointer: coarse), (max-aspect-ratio: 1/1) {
    margin: 0;
    padding: 8% 8% 4% 8%;
  }
`;

const CardSubHeader = styled.span`
  margin: 0 2.5vw 1.5vh 2vw;
  font-size: 0.9rem;

  @media (pointer: coarse), (max-aspect-ratio: 1/1) {
    margin: 0;
    padding: 0 8% 8% 8%;
  }
`;

const CardTags = styled.div`
  display: flex;
  margin: auto 0 2vh 1.8vw;
  font-size: 0.8rem;

  @media (pointer: coarse), (max-aspect-ratio: 1/1) {
    margin-left: 0;
    padding-left: 8%;
  }
`;

const CardTag = styled.div`
  display: inline-block;
  opacity: 0.6;
  border: 1.25px solid ${props => props.color ? props.color : '#888'};
  border-radius: 15px;
  margin-right: 5px;
  padding: 1.5px 10px;
  color: ${props => props.color ? props.color : '#888'};
`;
