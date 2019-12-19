import Home from './Home';
import About from './About';

export default [
  {
    component: Home,
    path: '/',
    key: 'HomePage',
    exact: true,
  },
  {
    component: About,
    path: '/about',
    key: 'AboutPage',
    exact: true,
  },
];
