import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from 'context';
import { RouterView } from 'router';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <RouterView />
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
