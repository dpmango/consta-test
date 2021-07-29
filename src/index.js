import React from 'react';
import ReactDOM from 'react-dom';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

import './index.css';
import TestTask from './components/Test';

ReactDOM.render(
  <React.StrictMode>
    <Theme preset={presetGpnDefault}>
      <TestTask />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);

