# Mattermost type definitions 
[Flow](https://flow.org/) type definition library for [Mattermost](https://about.mattermost.com/)

Compatible with [Mattermost API](https://api.mattermost.com) and [Mattermost Redux](https://github.com/mattermost/mattermost-redux)

This will help you in Mattermost projects:
* Understanding Mattermost codebase.
* Preventing building bad request or parsing response incorrectly.
* Improves productivity with intelligence support.

## How to apply this at my project?

### Initialize flow (if you've not).
```
yarn add --dev flow-bin
npx flow init
```

### Add type library
```
yarn add --dev mattermost-typed
```

Additionally, use [`flow-typed`](https://github.com/flowtype/flow-typed) to add types for your npm dependencies.

### Add line under lib tag on your `.flowconfig`
```diff
[lib]
+node_modules/mattermost-typed/flow
```

### Add the preset (if you use BabelJS)
```
yarn add --dev babel-preset-flow
```

And add line into your `.babelrc`
```diff
preset: [
+  "flow"
]
```

## How to use

### By CLI
```
npx flow [COMMAND] 
```

or add script into your `package.json`
```diff
scripts: {
+  "flow": "flow"
}
```

### VSCode Extentions
* [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)
* [vscode-flow-ide](https://marketplace.visualstudio.com/items?itemName=gcazaciuc.vscode-flow-ide)

## Is this really necessary? 
You might wonder if this is really necessary. 
Well, Here is why I came to think it's necessary - Can you inference the type of Get Posts API? 

I was building a Mattermost integration and I thought it would of course be an array of Post. And I had to see the result of `map is not a function` because it returned an Object, not an Array.

The following is what exactly the result of Get Posts looks like.
```json
{
  "order": [
    "post_id1",
    "post_id2"
  ],
  "posts": {
    "post1": {},
    "post2": {}
  }
}
```

* It was your fault. Mattermost have documentation for it.
* Why did you not write test, evil.

It is wrong not to check the documentation or write test code. But I generally skip it when productivity is important like in prototyping.
type checking is simple and a great alternative to avoid mistakes.

* PropTypes is not enough?

PropTypes is great sollution to assert types. But it's only for React component.

## Why not Typescript?
TODO
