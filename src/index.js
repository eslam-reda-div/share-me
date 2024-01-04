import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'

import App from './App';
import './index.css';

ReactDOM.render(
  <Router>
    <GoogleOAuthProvider clientId={`623605632760-ojssuoj14aum2bvooag0mjk6001uh0j5.apps.googleusercontent.com`}>
      <App />
    </GoogleOAuthProvider>
  </Router>,
  document.getElementById('root'),
);

