import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import { Provider } from 'react-redux';
import routes from './components/pages';
import store from './duck';
import theme from './helpers/theme';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          {routes.map(route => <Route {...route} />)}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
