import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'semantic-ui-react/dist/umd/semantic-ui-react.min.js'
import 'semantic-ui-css/semantic.min.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
