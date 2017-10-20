const paths = {
  src: {
    root: './src',
    settings: './src/settings',
    templates: './src/templates',
    editors: './src/editors'
  },
  dist: {
    root: './',
    schemes: './src/editors/st3/schemes',
    themes: './src/editors/st3/',
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
    files: {
      withFolderStructure: [
        './assets/icons/**/*.png',
        './icons/**/*.png',
        './messages/*.md',
        './CHANGELOG.md',
        './messages.json'
      ],
      inRoot: [
        './src/editors/st3/schemes/*.tmTheme',
        './src/editors/st3/utils/*.py',
        './src/editors/st3/*.sublime-*',
        './src/editors/st3/E.py',
        './src/editors/st3/Icons.py',
        './src/editors/st3/Edge.skins',
        './src/editors/st3/*.md',
        './src/editors/st3/.supports-a-file-icon-customization',
        './src/editors/st3/.gitignore'
      ]
    }
  }
};

export { paths, templates, deploy };
