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
    // Alterar o estilo do corpo com base no tema
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