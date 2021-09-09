# git-restore-mtime action

A GitHub Workflow Action which restores timestamps of files in the current tree based on their last commit times.

This is a fork of [git-restore-mtime-action](https://github.com/chetan/git-restore-mtime-action) which is kept up-to date with its dependency `MestreLion/git-tools`.

The fork in-turn is based on the [git-restore-mtime](https://github.com/MestreLion/git-tools) script by [@MestreLion](https://github.com/MestreLion).

## Usage

```yaml
build:
    ...
    steps:
      ...
      - uses: harshmandan/git-restore-mtime-action@v10
      ...
```

## Build

Run `ncc build` to generate index.js in the `dist` folder. More info on customization [here](https://github.com/actions/typescript-action) 
