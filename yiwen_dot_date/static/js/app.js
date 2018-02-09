import React from 'react';
import { render } from 'react-dom';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import YDAppBar from './AppBar.js';
import YDContent from './Content.js';
import YDButton from './FloatingButton.js';

render(<YDAppBar />, document.querySelector('#react_app'));
render(<YDButton />, document.querySelector('#button'));
