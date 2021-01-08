import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Planilla from './components/planilla/Planilla'
import PlanillaNew from './components/planilla/PlanillaNew'
import NotFound from './components/pages/NotFound'

const App =()=>(
  <Router>
  <Switch>
    <Route exact path="/planilla" component={Planilla} />
    <Route exact path="/planilla/new" component={PlanillaNew} />
    <Route  component= {NotFound}/>
  </Switch>

</Router>
)
// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/planilla" component={Planilla} />
//         <Route exact path="/planilla/new" component={PlanillaNew} />
//         <Route  component= {NotFound}/>
//       </Switch>

//     </Router>
//   )
// }


export default App;
