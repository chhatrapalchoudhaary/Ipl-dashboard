import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import TeamMatches from './components/TeamMatches'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/team-matches/:id" component={TeamMatches} />
    </Switch>
  </BrowserRouter>
)

export default App
