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
* `yarn release` will copy the release files into `release/` in order for you to see the changes reflected in the editor's UI.

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
├── releases
│   └── iterm2
│   └── sublimetext
├── src
│   ├── editors
│   │   └── iterm2
│   │   └── sublimetext
│   ├── settings
│   │   ├── include
│   │   ├── Edge Night Sky.json
│   │   ├── Edge Ocean.json
│   │   ├── Edge Serene.json
│   │   └── common.json
│   └── templates
│       ├── iterm2-scheme.nunjucks
│       ├── sublime-scheme.nunjucks
│       └── sublime-theme.nunjucks
├── CHANGELOG.md
├── CONTRIBUTING.md
├── Edge Theme.sketch
├── README.md
├── gulpfile.babel.js
├── package.json
└── yarn.lock
```

* `assets/icons` contains the UI icons for the various themes
* `gulp` contains the tasks for development, e.g. building the themes
* `icons` contains the file_type icons. Please note that Edge for Sublime Text 3 supports [A File Icon](https://github.com/ihodev/a-file-icon) package.
* `releases/` contains the release files for each individual editor. Each editor has its own repo.
* `src` contains the source files, as follows:
* `src/editors` -> editor-specific files
* `src/settings` -> the theme settings. Most of the work should go in here.
* `src/templates` -> the templates for each of the files that need to come out in the release.

### Editor specific

#### Sublime Text 3

There's a small workflow you can apply to make modifications on the themes and have them reflect on the Sublime editor UI.

1. `git clone git@github.com:tricinel/edge-theme.git`
2. `cd edge-theme/releases && mkdir sublimetext`
3. `cd ..`
4. `yarn build`
5. `cd <path-to-sublime-text-3-packages> && rm -rf Edge\ Theme #if you have the theme installed`
6. `ln -s <path-to-edge-theme-repo>/releases/sublimetext Edge Theme`
7. `cd <path-to-edge-theme-repo>`
8. Make changes
9. `yarn build`
10. `yarn test:release`

#### iTerm2

There's no workflow you can apply to make modifications on the color schemes and have them immediately reflect on the iTerm2 UI. However, you can still use the `release` task to generate the color schemes that you can then re-import into iTerm2.

1. `git clone git@github.com:tricinel/edge-theme.git`
2. `cd edge-theme/releases && mkdir iterm2`
3. `cd ..`
4. Make changes
5. `yarn build`
6. `yarn test:release`
7. Launch iTerm 2.
8. Click on iTerm2 menu title
9. Select the **Preferences** option
10. Select **Profiles**
11. Navigate to **Colors** tab
12. Click on **Color Presets**
13. Click on **Import**
14. Select the `.itermcolors` files of the schemes from `<path-to-edge-theme-repo>/releases/iterm2`
15. Click on **Color Presets** and choose a color scheme that you previously imported.
