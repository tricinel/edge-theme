![Edge](https://i.imgur.com/KbIYmhD.png)

`Edge` is a simple theme with bright colors. Edge comes in three versions — _Night Sky_, _Serene_ and _Ocean_ for all day long comfortable work. The theme has a few customisable options to help you personalise your experience with it.

## Installation

- If you're a Sublime Text 3 user, please check out the [Sublime Text 3 specific repository](https://github.com/tricinel/edge-theme-sublime-text-3)
- If you're a iTerm2 user, please check out the [iTerm2 specific repository](https://github.com/tricinel/edge-theme-iterm2)
- If you're a Vim user, please check out the [Vim specific repository](https://github.com/tricinel/edge-theme-vim)
- If you're a VSCode user, please check out the [VSCode specific repository](https://github.com/tricinel/edge-theme-vscode)
- If you're a Alfred user, please check out the [Alfred specific repository](https://github.com/tricinel/edge-theme-alfred)

## Local development

- Clone this repo
- `yarn install` will install the required dev dependencies
- `yarn watch` will watch the files for changes and generate the themes/schemes
- `yarn build` will build the theme files
- `yarn test` will run the tests
- `yarn a11y` will check the colors in all the themes for accessibility

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
├── dist
│   └── alfred
│   └── iterm2
│   └── sublimetext
│   └── vim
│   └── vscode
├── src
│   ├── config
│   │   └── alfred
│   │   └── iterm2
│   │   └── sublimetext
│   │   └── vim
│   │   └── vscode
│   ├── utils
├── CHANGELOG.md
├── CONTRIBUTING.md
├── Edge Theme.sketch
├── README.md
├── gulpfile.babel.js
├── package.json
└── yarn.lock
```

- `assets/icons` contains the UI icons for the various themes
- `gulp` contains the tasks for development, e.g. building the themes
- `icons` contains the file_type icons. Please note that Edge for Sublime Text 3 supports [A File Icon](https://github.com/ihodev/a-file-icon) package.
- `src` contains the source files, as follows:
- `src/config` -> general config and editor-specific files, such as templates that are generated
- `src/utils` -> various util files, such as accessibility utils, logger and color utils

### Editor specific

#### Sublime Text 3

There's a small workflow you can apply to make modifications on the themes and have them reflect on the Sublime editor UI.

1.  `git clone git@github.com:tricinel/edge-theme.git`
2.  `yarn install`
3.  `yarn build`
4.  `cd <path-to-sublime-text-3-packages> && rm -rf Edge\ Theme #if you have the theme installed`
5.  `ln -s <path-to-edge-theme-repo>/dist/sublime-text Edge\ Theme`
6.  `cd <path-to-edge-theme-repo>`
7.  Make changes
8.  `yarn build`

#### iTerm2

There's no workflow you can apply to make modifications on the color schemes and have them immediately reflect on the iTerm2 UI. However, you can still use the `release` task to generate the color schemes that you can then re-import into iTerm2.

1.  `git clone git@github.com:tricinel/edge-theme.git`
2.  `yarn install`
3.  `yarn build`
4.  Make changes
5.  `yarn build`
6.  Launch iTerm 2.
7.  Click on iTerm2 menu title
8.  Select the **Preferences** option
9.  Select **Profiles**
10. Navigate to **Colors** tab
11. Click on **Color Presets**
12. Click on **Import**
13. Select the `.itermcolors` files of the schemes from `<path-to-edge-theme-repo>/dist/iterm2`
14. Click on **Color Presets** and choose a color scheme that you previously imported.

#### Slack

With Slack, you can customize the sidebar theme by pasting the following color codes in your *Sidebar Theme* section under Slack's *Preferences*:

**Edge Night Sky**

`#07161B,#172A3A,#172A3A,#F3D3BD,#061419,#A9BCD0,#5DD39E,#FB3640`

**Edge Serene**

`#F6EED8,#EAE1CB,#DDC990,#633F24,#097C8E,#633F24,#2E7820,#C41922`

**Edge Ocean**

`#001230,#0C2A59,#0C2A59,#F5D2AC,#F5D2AC,#52A6F0,#40C7BC,#E7616F`
