import React from 'react';
import ReactDOM from 'react-dom';
import { Theme } from '@consta/uikit/Theme';
import { mainTheme } from './theme/main';

import './index.css';
import TestTask from './components/Test';

ReactDOM.render(
  <React.StrictMode>
    <Theme preset={mainTheme}>
      <TestTask />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);

