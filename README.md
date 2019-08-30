# webpack-nunjucks-boilerplate
Static web page by nunjucks, webpack. It only focus on html content.

## Tool
- bootstrap@4.3.1
- nunjucks
- pre-commit
- webpack

## Start

```
npm install
npm run dev
```

> LiveReload or reload page by yourself.

When you commit, it will trigger pre-commit command to build file.
If you want to skip command, please add option `--no-verify` or `-n`.

eg: `git commit 'Update readme.md' -n`

## Deploy Dist to Master branch

npm script will deploy `./dist` folder to master branch

```
npm run deploy
```

Note: We will auto-build `./dist` folder when you pre-commit
