import React from 'react'
import Product from './product'
import Service from './service'
import Home from './home'
import Sign from './sign'
import Nav from './nav'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App(){
    return<Router>
<Nav/>
        <Switch>
<Route path='/' exact><Home/></Route>
<Route path='/product'><Product/></Route>
<Route path='/service'><Service/></Route>
<Route path='/sign' ><Sign/></Route>
        </Switch>
    </Router>
}
export default App