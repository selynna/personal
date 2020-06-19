import React from 'react';
import styled from 'styled-components';

import { Card } from '../components';

const cards = [
  {
    title: "Intro to Adobe XD",
    link: "https://www.youtube.com/watch?v=CC6GG7InXec",
    year: "2020",
    type: "workshop",
  },
  {
    title: "Custom Vision with Microsoft Azure",
    link: "https://stories.mlh.io/configuring-a-custom-vision-model-with-microsoft-azure-b00ccf497f07",
    year: "2019",
    type: "tutorial",
  },
  {
    title: "Deploying Django with Microsoft Azure",
    link: "https://stories.mlh.io/deploying-a-basic-django-app-using-azure-app-services-71ec3b21db08",
    year: "2019",
    type: "tutorial",
  },
  {
    title: "Clarifai Workflow API",
    link: "https://stories.mlh.io/use-clarifais-workflow-api-to-predict-with-multiple-models-cf67dd342010",
    year: "2018",
    type: "tutorial",
  },
];

export default props => (
  <WorkshopsContainer>
    <WorkshopsWrapper>
      <WorkshopsHeader>
        Public Workshops and Tutorials
      </WorkshopsHeader>
      <WorkshopsContent>
        {cards.map((card, id) => <Card {...card} key={id} /> )}
      </WorkshopsContent>
    </WorkshopsWrapper>
  </WorkshopsContainer>
);

const WorkshopsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const WorkshopsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 85vw;
`;

const WorkshopsHeader = styled.h1`
  display: flex;
  margin: 0;
  background: linear-gradient(to right top, #667eea, #764ba2);
  font-size: 36px;
  font-family: 'Proxima Nova Bold';
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  @media (pointer: coarse), (max-aspect-ratio: 1/1) {
    justify-content: center;
    align-items: center;
  }
`;

const WorkshopsContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin-top: 3vh;
`;

