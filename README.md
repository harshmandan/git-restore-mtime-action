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
      - uses: harshmandan/git-restore-mtime-action@v12.1
      ...
```

## Build

-   `npm run build` will generate `lib/main.js`
-   `npm run package` will then package the `lib/main.js` file along with its modules and dependencies in `dist/index.js`
