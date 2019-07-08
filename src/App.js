import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.scss'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App
