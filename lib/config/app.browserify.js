// NOTE:
// "let" keyword will not work here!  it throws errors.
// this must either be declared without a keyword (global) or with "var"
var injectTapEventPlugin = require("react-tap-event-plugin")

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()
React.initializeTouchEvents(true)

// init material ui
mui = require('material-ui')