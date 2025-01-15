import React, { useState, useRef, useContext, createContext, useEffect } from "react";

// Exercício 1: Foco em um Input
const InputFocus = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Clique no botão para focar aqui" />
      <button onClick={handleFocus}>Focar no Input</button>
    </div>
  );
};

// Exercício 2: Controlando um Cronômetro
const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) { // Prevenir múltiplos intervalos
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
  };

  const stopStopwatch = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <h2>{seconds} segundos</h2>
      <button onClick={startStopwatch} disabled={isRunning}>
        Iniciar
      </button>
      <button onClick={stopStopwatch} disabled={!isRunning}>
        Pausar
      </button>
      <button onClick={resetStopwatch}>
        Resetar
      </button>
    </div>
  );
};

// Exercício 3: Contexto de Tema
const ThemeContext = createContext();

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <p>O tema atual é: <strong>{theme}</strong></p>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: theme === "Claro" ? "#333" : "#fff",
          color: theme === "Claro" ? "#fff" : "#000",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Alternar Tema
      </button>
    </div>
  );
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Claro");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "Claro" ? "Escuro" : "Claro"));
  };

  useEffect(() => {
    const body = document.body;
    if (theme === "Claro") {
      body.style.backgroundColor = "#fff";
      body.style.color = "#000";
    } else {
      body.style.backgroundColor = "#333";
      body.style.color = "#fff";
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// App.js
const App = () => {
  return (
    <div>
      <h1>Exercícios React</h1>
      <InputFocus />
      <Stopwatch />
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    </div>
  );
};

export default App;
