import { useState, useEffect } from 'react';
import { auth } from './services/firebase';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Brands from './pages/Brands/Brands';
import Inventory from './pages/Inventory/Inventory';
import Colors from './pages/Colors/Colors';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const cancelSubscription = auth.onAuthStateChanged(userInfo => {
      setUser(userInfo);
    });

    return function() { // cleanup function
      cancelSubscription();
    }
  }, [user]);

  return (
    <div className="App">
      <Header user={user} />
      <Switch>
        <Route exact path = '/' render={(props) => 
          <Home />
        } />
        <Route exact path = '/brands' render={(props) => 
          <Brands />
        } />
        <Route exact path = '/colors' render={(props) => 
          <Colors />
        } />
        <Route exact path = '/inventory' render={(props) => 
          <Inventory />
        } />
      </Switch>
    </div>
  );
}

export default App;
