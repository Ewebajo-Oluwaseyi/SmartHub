import React, { Suspense } from 'react';
import { Home } from './Pages'

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Home/>
    </Suspense>
  );
}

export default App;
