# meteor-material-ui-example

The point of this repo was to get help with using [material-ui](https://github.com/callemall/material-ui/) with [meteor 1.2.0.2 + react](https://github.com/meteor/react-packages/)

There are several changes that you have to be aware of if you're coming from `meteor 1.1` and `material-ui 0.11` !

## 1. packages.json
When you include `"material-ui": "0.12.1"` you **DO NOT** includes `"react-tap-event-plugin":"0.1.7"` as you did with m-ui 0.11.x

## 2. app.browserify.options.json
You **MUST** includes React like this `"react": "React.require"` and not `"react":"Package[react-runtime].React.require"` as I have seen on some threads.
This will throw `React undefined...` errors.

## 3. app.browserify.js
ES2015 is cool, but you can't use the `let` keyword in this file.  Using `let` will throw `Unexpected identifier` errors.
Any variables you use here must either be global `myvar = require('some-package')` or you must use the old-fashioned `var` keyword.



*solution referenced here https://github.com/mrphu3074/react-material-ui/issues/15*
