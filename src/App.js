import React, { useContext, useEffect } from 'react';
import './App.css';
import ThemeProvider, { ThemeContext } from './ThemeContext';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicação de Tema</h1>
        <button onClick={toggleTheme}>
          Alternar para Tema {theme === 'light' ? 'Escuro' : 'Claro'}
        </button>
      </header>
    </div>
  );
};

const ThemedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default ThemedApp;
