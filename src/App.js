import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import { Provider } from 'react-redux';
import routes from './components/pages';

const App = () => (
  <Provider store={null}>
    <ThemeProvider theme={null}>
      <BrowserRouter>
        <Switch>
          {routes.map(route => <Route {...route} />)}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
