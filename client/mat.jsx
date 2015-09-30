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

  getInitialState(){
    return {
      counter: 0
    }
  },

  _handleTap(e){
    e.preventDefault()
    console.log('it worked ------- !')
    console.log(e)

    this.setState({
      counter: ++this.state.counter
    })
  },

  render(){
    return (
      <div>
        <RaisedButton primary label='tap me' onTouchTap={this._handleTap} />
        <p>You've pressed the button <b>{this.state.counter}</b> times.</p>
      </div>
    )
  }
})

Meteor.startup(()=>{
  React.render(<App />, document.body)
})