let injectTapEventPlugin = require("react-tap-event-plugin")

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()
React.initializeTouchEvents(true)

// material ui
mui = require('material-ui')