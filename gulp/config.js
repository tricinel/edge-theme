const paths = {
  src: {
    root: './src',
    settings: './src/settings',
    templates: './src/templates',
    targets: './src/targets'
  },
  dist: {
    root: './',
    schemes: './schemes',
    themes: './',
    releases: './releases'
  },
  tmp: './.tmp'
};

const templates = {
  theme: './src/templates/theme.nunjucks',
  scheme: './src/templates/scheme.nunjucks'
};

const deploy = {
  st3: {
    files: [
      './assets/icons/**/*.png',
      './icons/**/*.png',
      './messages/*.md',
      './schemes/*.tmTheme',
      './utils/*.py',
      './.supports-a-file-icon-customization',
      './CHANGELOG.md',
      './*.sublime-*',
      './E.py',
      './Icons.py',
      './Edge.skins',
      './messages.json'
    ],
    docs: ['./src/targets/st3/*.md']
  }
};

export { paths, templates, deploy };
