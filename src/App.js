import { useState, useEffect } from 'react';
import { auth } from './services/firebase';

import './App.css';
import Brand from './components/Brand/Brand';
import Header from './components/Header/Header';

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
      <Brand />
      <Brand />
      <Brand />
    </div>
  );
}

export default App;
