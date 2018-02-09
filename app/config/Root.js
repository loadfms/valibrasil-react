// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import App from '../components/App';

// const Root = () => {
//   return (
//     <Router>
//       <Route path="/" component={App} />
//     </Router>
//   );
// };

// export default Root;

import React from 'react';
import Top from './Header/Top';
import Home from './Home/Home';

const App = () => {
  return (
    <div>
      <Top />
      <Home />
    </div>
  );
};

export default App;
