import React from 'react';
import  Home  from './Pages/Home'
import AuthContextProvider  from "./store/AuthContext"

function App() {
  return (
      <AuthContextProvider>
        <Home/>
      </AuthContextProvider>
  );
}

export default App;
