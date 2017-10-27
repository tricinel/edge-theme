const paths = {
  src: {
    root: './src',
    settings: './src/settings',
    templates: './src/templates',
    editors: './src/editors'
  },
  dist: {
    root: './',
    schemes: './src/editors/st3/',
    themes: './src/editors/st3/',
    iterm2: './src/editors/iterm2/',
    releases: './releases'
  },
  tmp: './.tmp'
};

const templates = {
  theme: './src/templates/sublime-theme.nunjucks',
  scheme: './src/templates/sublime-scheme.nunjucks',
  iterm2: './src/templates/iterm2-scheme.nunjucks'
};

const deploy = {
  st3: {
    files: {
      withFolderStructure: [
        './assets/icons/**/*.png',
        './icons/**/*.png',
        './messages/*.md',
        './CHANGELOG.md',
        './License.md',
        './messages.json',
        './utils/*.py'
      ],
      inRoot: [
        './src/editors/st3/*.tmTheme',
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
