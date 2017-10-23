![Edge](https://i.imgur.com/KbIYmhD.png)

`Edge` is a simple theme with bright colors. Edge comes in three versions — *Night Sky*, *Serene* and *Ocean* for all day long comfortable work. The theme has a few customisable options to help you personalise your experience with it.

## Installation

* If you're a Sublime Text 3 user, please check out the (Sublime Text 3 specific repository)[https://github.com/tricinel/edge-theme-sublime-text-3]
* If you're a VS Code user, hold on a wee bit longer, I'm working on it.
* If you're an Atom user, hold on a wee bit longer, I'm working on it.

## Local development

* Clone this repo
* `yarn install` will install the required dev dependencies
* `yarn watch` will watch the files for changes and generate the themes/schemes
* `yarn build:themes` will build the theme files
* `yarn build:schemes` will build the scheme files
* `yarn build` will build everything

### Files and folder structure

```
├── assets
│   └── icons
│       ├── common
│       ├── night-sky
│       ├── ocean
│       └── serene
├── gulp
├── icons
├── messages
├── releases
│   └── st3
├── src
│   ├── editors
│   │   └── st3
│   ├── settings
│   │   ├── include
│   │   ├── Edge Night Sky.json
│   │   ├── Edge Ocean.json
│   │   ├── Edge Serene.json
│   │   └── common.json
│   └── templates
│       ├── sublime-scheme.nunjucks
│       └── sublime-theme.nunjucks
├── utils
├── CHANGELOG.md
├── CONTRIBUTING.md
├── Edge Theme.sketch
├── README.md
├── gulpfile.babel.js
├── messages.json
├── package.json
└── yarn.lock
```
* `assets/icons` contains the UI icons for the various themes
* `gulp` contains the tasks for development, e.g. building the themes
* `icons` contains the file_type icons. Please note that Edge for Sublime Text 3 supports [A File Icon](https://github.com/ihodev/a-file-icon) package.
* `messages` contains the install/update messages
* `releases/` contains the release files for each individual editor. Each editor has its own repo.
* `src` contains the source files, as follows:
* `src/editors` -> editor-specific files
* `src/settings` -> the theme settings. Most of the work should go in here.
* `src/templates` -> the templates for each of the files that need to come out in the release.
* `utils` -> some py files to make things easier for the end user when installing/activating the themes

### Editor specific

#### Sublime Text 3

There's a small workflow you can apply to make modifications on the themes and have them reflect on the Sublime editor UI.

1. `git clone git@github.com:tricinel/edge-theme.git`
2. `cd edge-theme/releases && mkdir st3`
3. `cd ..`
4. `yarn build`
5. `cd <path-to-sublime-text-3-packages> && rm -rf Edge\ Theme #if you have the theme installed`
6. `ln -s <path-to-edge-theme-repo>/releases/st3 Edge Theme`
7. `cd <path-to-edge-theme-repo>`
8. `yarn watch`
