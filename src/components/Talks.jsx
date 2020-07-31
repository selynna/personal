import React from 'react';
import styled from 'styled-components';

import { Card } from '../components';

const cards = [
  {
    title: "SLO Chamber of Commerce, Good Morning SLO series",
    content: "Talk discussing SLO Hacks' growth + impact since its founding",
    link: "https://www.youtube.com/watch?v=SnTPnLFQwWw",
    year: "2020",
    type: "talk",
  },
  {
    title: "MLH Top 50 Hacker",
    link: "https://top.mlh.io/2020/profiles/selynna-sun",
    year: "2020",
    type: "feature",
  },
  {
    title: "MLH Hackcon VII",
    content: '"Recruiting the Next Generation of Hackathon Organizers"',
    link: "https://www.youtube.com/watch?v=6OvBOwowlrI",
    year: "2019",
    type: "talk",
  },      
  { 
    title: "Cal Poly Magazine, Summer 2019",
    content: "Video feature + article on my work with SLO Hacks",
    link: "https://magazine.calpoly.edu/summer-2019/a-new-view-on-hacking/",
    year: "2019",
    type: "feature",
  },
  { 
    title: "MLH Hackcon VI",
    content: '"Giving and Receiving Feedback as a Hackathon Organizer"',
    link: "https://www.youtube.com/watch?v=aT5rJFDFaic",
    year: "2018",
    type: "talk",
  },
  { 
    title: "ICGJ 2018",
    link: "https://dl.acm.org/doi/10.1145/3196697.3196706",
    content: '"SLO Hacks: Embracing the Passionate Novice" (paper + talk)',
    year: "2018",
    type: "talk",
  },
  { 
    title: "Cal Poly 30 under 30 Most Influential Women",
    link: "https://wibwire.exposure.co/30-under-30",
    year: "2018",
    type: "feature",
  },
  { 
    title: "Microsoft Imagine Cup US + World Finals",
    content: "Zelixa: AR project trying to solve dyslexia therapy",
    link: "https://blogs.msdn.microsoft.com/microsoftimagine/2018/06/08/meet-the-2018-imagine-cup-world-finalists/",
    year: "2018",
    type: "feature",
  },
  { 
    title: "Panel with Sandy Carter, VP of AWS",
    link: "http://www.thechannelco.com/wotcw17/wotc-career-pursuits",
    year: "2017",
    type: "talk",
  },
  { 
    title: "ReigningIt",
    link: "https://medium.com/@ReigningIt/women-who-reign-selynna-sun-35daea787e79",
    year: "2016",
    type: "feature",
  },
  { 
    title: "Microsoft Channel 9",
    content: "Interview about organizing high school hackathons",
    link: "https://channel9.msdn.com/Blogs/raw-tech/Hacking-in-High-School-What-it-takes-to-plan-a-HS-hackathon-with-250-students",
    year: "2016",
    type: "feature",
  },
  { 
    title: "Los Altos Town Crier on Los Altos Hacks",
    link: "https://www.losaltosonline.com/news/sections/schools/210-school-features/52227-",
    year: "2016",
    type: "feature",
  },
  { 
    title: "LAHS Talon on CodeDay",
    link: "https://lahstalon.org/local-students-plan-hackathon-style-event/",
    year: "2016",
    type: "feature",
  },
];

export default props => (
  <TalksContainer>
    <TalksWrapper>
      <TalksHeader>
        Talks and Features
      </TalksHeader>
      <TalksContent>
        {cards.map((card, id) => <Card {...card} key={id} /> )}
      </TalksContent>
    </TalksWrapper>
  </TalksContainer>
);

const TalksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const TalksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 85vw;
`;

const TalksHeader = styled.h1`
  display: flex;
  color: #5f5fc2;
  margin: 0;
  font-size: 36px;
  font-family: 'Proxima Nova Bold';

  @media (pointer: coarse), (max-aspect-ratio: 1/1) {
    justify-content: center;
    align-items: center;
  }
`;

const TalksContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin-top: 3vh;
`;
