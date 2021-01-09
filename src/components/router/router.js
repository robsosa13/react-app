import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import Planilla from './components/planilla/Planilla'
// import PlanillaNew from './components/planilla/PlanillaNew'
// import NotFound from './components/pages/NotFound'
import planillaMaster from '../planilla/PlanillaMaestra'
export default function AppRouter() {
    return (
        <Router>
            <Switch>
                {/* <Route exact path="/planilla" component={Planilla} />
                <Route exact path="/planilla/new" component={PlanillaNew} /> */}
                <Route exact path={["/PlanillaMaster","/PlanillaMaster"]} component={planillaMaster} />
                <Route exact path="/PlanillaMaster" component={planillaMaster} />
                <Route  path="*" component={()=><h1 style={{marginTop:200,marginLeft:600}}>404 <br/>Pagina No encontrada</h1>}/>
                {/* <Route component={NotFound} /> */}
            </Switch>
        </Router>
    )
}

