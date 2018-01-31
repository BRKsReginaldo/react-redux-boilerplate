import React, {Component} from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="root">
        <p>{this.props.test.testMessage}</p>
      </div>
    )
  }
}

function mapStateToProps({ test }) {
  return { test }
}

export default connect(mapStateToProps)(App)