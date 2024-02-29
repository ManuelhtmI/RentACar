import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LoginForm from './components/LoginForm/LoginForm';
import UserInfo from './components/UserInfo/UserInfo.js';
import Table from './components/Table/Table.js'; // Import du composant Table
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [cars, setCars] = useState([
    { id: 1, model: "Modèle 1", brand: "Marque 1", km: "123", agency: "Agence 1" },
    { id: 2, model: "Modèle 2", brand: "Marque 2", km: "456", agency: "Agence 2" },
    { id: 3, model: "Modèle 3", brand: "Marque 3", km: "789", agency: "Agence 3" },
  ]);

  const handleLogin = () => {
    setUser({ firstName: 'John', lastName: 'Doe', phone: '123-456-7890', address: '123 Main St' });
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} />
        <div className="content">
          {isLoggedIn ? (
            <>
              <UserInfo user={user} />
              <Routes>
                <Route path="/" element={<Table cars={cars} />} /> {/* Utilisation du composant Table */}
              </Routes>
            </>
          ) : (
            <LoginForm onLogin={handleLogin} />
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
