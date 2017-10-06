const paths = {
  src: {
    root: './src',
    themes: './src/themes',
    schemes: './src/schemes',
    settings: './src/settings',
    templates: './src/templates'
  },
  dist: {
    root: './',
    schemes: './schemes'
  },
  tmp: './.tmp'
};

const templates = {
  theme: './src/templates/theme.nunjucks',
  scheme: './src/templates/scheme.nunjucks'
};

export { paths, templates };
