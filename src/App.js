import { useState, useEffect } from 'react';
import { auth } from './services/firebase';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Brands from './pages/Brands/Brands';
import Inventory from './pages/Inventory/Inventory';
import Colors from './pages/Colors/Colors';
import Category from './pages/Category/Category';

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

  const brandsArray = ['Premo', 'Fimo', 'Sculpey III'];
  const colorsArray = ['Red', 'Pink', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'White', 'Black', 'Texture'];

  return (
    <div className="App">
      <Header user={user} />
      <Switch>
        <Route exact path = '/' render={(props) => 
          <Home />
        } />
        <Route exact path = '/brands' render={(props) => 
          <Category
            category='Brands'
            array={brandsArray}
          />
        } />
        <Route exact path = '/colors' render={(props) => 
          <Category
          category='Colors'
          array={colorsArray}
        />
        } />
        <Route exact path = '/inventory' render={(props) => 
          <Inventory />
        } />
      </Switch>
    </div>
  );
}

export default App;
