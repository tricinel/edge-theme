const paths = {
  src: {
    root: './src',
    settings: './src/settings',
    templates: './src/templates'
  },
  dist: {
    root: './',
    schemes: './schemes',
    themes: './'
  },
  tmp: './.tmp'
};

const templates = {
  theme: './src/templates/theme.nunjucks',
  scheme: './src/templates/scheme.nunjucks'
};

export { paths, templates };
