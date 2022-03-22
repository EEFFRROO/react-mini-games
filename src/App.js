import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import {routes} from "./constants/routes";
import Main from "./pages/Main";
import PageLayout from "./components/PageLayout";
import Games from "./pages/Games";

function App() {
  return (
    <div className="App">
        <PageLayout>
          <Switch>
            <Route path={routes.main} exact={ true } component={Main}/>
            <Route path={routes.games} exact={ true } component={Games}/>
            <Route path={routes.about} exact={ true } component={Main}/>
            <Redirect to={'/'}/>
          </Switch>
        </PageLayout>
    </div>
  );
}

export default App;
