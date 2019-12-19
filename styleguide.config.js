const path = require('path');

module.exports = {
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Lato&display=swap',
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: '"Lato", sans-serif',
    },
  },
};
