import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.scss'
import Home from './components/Home'
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
        <Route exact path="/" component={Navigation} />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App
