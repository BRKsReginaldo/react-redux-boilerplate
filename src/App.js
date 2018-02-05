import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeText } from './actions'

class App extends Component {
  render() {
    return (
      <div className="root">
        <input value={this.props.test.testMessage} onChange={(e) => this.props.handleText({ value: e.target.value })} />
        <p>{this.props.test.testMessage}</p>
      </div>
    )
  }
}

function mapStateToProps({ test }) {
  return { test }
}

function mapDispatchToProps(dispatch) {
  return {
    handleText: (data) => dispatch(changeText(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)