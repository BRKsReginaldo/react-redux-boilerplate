import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/main.styl'

const App = () => (
  <div className="root">
    <p>React + Redux Boilerplate.</p>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))