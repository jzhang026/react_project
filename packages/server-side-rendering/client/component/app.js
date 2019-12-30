import React, { useState, useEffect} from 'react'
import { Router, Route, Link} from 'react-router-dom'
import Counter from './counter'
import { createBrowserHistory } from 'history'
function AnotherRoute() {
  return <Counter startValue={20} />
}

function ShowMyIp() {
  const[ip, setIp] = useState("2")
  useEffect(() => {
    fetch('https://wtfismyip.com/json').then((response) => {
            response.json().then((data) => {
                setIp(data.YourFuckingIPAddress)
            });
        });
  })
  return (
  <div>{ip}</div>
  )
}

function Layout() {
  return (
    <div>
      <div>
      <Link to="/counter-1">counter 1</Link> |
      <Link to="/counter-2">counter 2</Link> |
      <Link to="/showip">show my ip</Link> 
      </div>
    </div>
  )
}

const history = createBrowserHistory()
function AppRouter() {
  return (
    <Router history={history}>
      <Layout />
      <Route path="/counter-1" component={Counter}/>
      <Route path="/counter-2" component={AnotherRoute}/>
      <Route path="/showip" component={ShowMyIp}/>
    </Router>
  )
}

export default AppRouter