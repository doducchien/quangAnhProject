import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";

import {clientSide} from './commonly/clientSide'

const Home = React.lazy(() => import('./components/Home'))
const Authentication = React.lazy(() => import('./components/authentication/Authentication'))



const PrivateRoute = (props)=>{
    const user = clientSide.getUser()
    if(user){

    }
    else return <Redirect to='/authentication'/>
}


function App() {
  // const match = useRouteMatch()
  // console.log(match)
  return (
    <BrowserRouter className="App">
      <React.Suspense fallback={<div>Loadding...</div>}>
        <Switch>
          <Route exact path='/'>
              <Home/>
          </Route>
          <Route path='/authentication'>
              <Authentication/>
          </Route>


        </Switch>
      </React.Suspense>

    </BrowserRouter>
  );
}

export default App;
