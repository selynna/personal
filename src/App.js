import React, { Component } from 'react';
import styled from 'styled-components'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  fab,
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import { About } from './components';

library.add(
  fab,
  faEnvelope,
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
);

class App extends Component {
  render() {
    return (
      <Wrapper>
        <About />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: #f4f6f8;
  color: #444545;
`;

export default App;
