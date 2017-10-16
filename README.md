# Mattermost type definitions 

[Flowtype](https://flow.org/) definition library for [Mattermost](https://about.mattermost.com/)

Compatible with [Mattermost API](https://api.mattermost.com) and [Mattermost Redux](https://github.com/mattermost/mattermost-redux)

## Requirements & Recommends

### Global installation of Flow

Install `flow-bin` package using yarn or npm first

```
yarn global add flow-bin
```
or

```
npm install -g flow-bin
```

### VSCode extention (if you use VSCode)

* [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)
* [vscode-flow-ide](https://marketplace.visualstudio.com/items?itemName=gcazaciuc.vscode-flow-ide)

## How to use this?

1. Clone this repo into your `<WORKDIR>/mattermost-typed`
2. Go to root path of your Mattermost project and execute `flow init`
3. Put a line under `[libs]` on your `.flowconfig` file  
  ```diff
  [libs]
  + <WORKDIR>/mattermost-typed/flow-typed
  ```
4. You may need more settings for Flow like [babel-preset-flow](https://babeljs.io/docs/plugins/preset-flow/) and [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)

**Enjoy!**
