/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../HomePage/index'

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </AppWrapper>
  );
}