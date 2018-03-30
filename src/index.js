import React from 'react';
import 'config/ReactotronConfig';
import { Provider } from 'react-redux';

import Main from 'Pages/Main';
import store from 'store';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
