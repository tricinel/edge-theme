const paths = {
  src: {
    root: './src',
    settings: './src/settings',
    templates: './src/templates',
    editors: './src/editors'
  },
  dist: {
    root: './',
    sublimetext: './src/editors/sublimetext/',
    iterm2: './src/editors/iterm2/',
    vim: './src/editors/vim/',
    releases: './releases'
  },
  tmp: './.tmp'
};

const templates = {
  sublimeTheme: './src/templates/sublime-theme.nunjucks',
  sublimeScheme: './src/templates/sublime-scheme.nunjucks',
  iterm2: './src/templates/iterm2-scheme.nunjucks',
  vim: './src/templates/vim-scheme.nunjucks'
};

const deploy = {
  sublimetext: ['./assets/icons/**/*.png', './icons/**/*.png']
};

export { paths, templates, deploy };
