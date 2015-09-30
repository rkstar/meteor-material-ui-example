let {RaisedButton} = mui,
  App = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext(){
    return {
      muiTheme: mui.Styles.ThemeManager.getMuiTheme(mui.Styles.LightRawTheme)
    }
  },

  _handleTap(e){
    e.preventDefault()
    console.log('it worked ------- !')
    console.log(e)
  },

  render(){
    return (
      <RaisedButton secondary label='tap me' onTouchTap={this._handleTap} />
    )
  }
})

Meteor.startup(()=>{
  React.render(<App />, document.body)
})