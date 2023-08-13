import React, { StrictMode, Profiler } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const onRender = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) => {
  console.log(id, phase, actualDuration, baseDuration, startTime, commitTime);
};

root.render(
  <StrictMode>
    <Profiler id="App" onRender={onRender}>
      <App />
    </Profiler>
  </StrictMode>
);
