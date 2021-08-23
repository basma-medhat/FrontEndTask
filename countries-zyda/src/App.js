import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import Home from 'components/home/Home';
import Header from 'components/header/Header';
import Details from 'components/details/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          {/* Add high top default route to handle scrolling to the top of the page when routing */}
          <Route component={ScrollToTop} />
          {/* switch here to insure only one component is shown, though its not needed in this case */}
          <Switch>
            <Route path="/Home" exact>
              <Home />
            </Route>
            <Route path="/Country/:name" exact>
              <Details />
            </Route>
            {/* to set default opening component to Home and handle unknown routes*/}
            <Redirect from="/" to="/Home" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default App;
