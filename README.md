# Atividade React - Exercícios*

Esse projeto foi feito para explorar os conceitos essenciais do React, como useState, useRef, useContext e useEffect. Aqui vou explicar como cada exercício foi feito e como funciona a lógica por trás deles.

----------
  
### 1. Exercício - Foco no Input

Este exercício mostra como usar o hook useRef para manipular elementos do DOM diretamente, colocando o foco em um campo de texto quando um botão é clicado.

*Como foi feito?*

-   Criei uma referência com useRef apontando para o campo de input.
-   Quando o botão é clicado, a função handleFocus usa a referência para aplicar o método .focus() no input.
-   Isso garante que o foco no campo seja controlado programaticamente.

*Código:*


```javascript
const InputFocus = () => {
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
```


*Por que é útil?*

Esse exercício é bom para situações reais, como dar foco automaticamente em campos de login ou formulários, melhorando a experiência do usuário.

----------

### ** 2 - Exercício - Cronômetro**

O cronômetro é usado para praticar o uso combinado de **useState** e **useRef**, além de aprender a lidar com intervalos usando **setInterval** e **clearInterval** de maneira segura e funcional.

----------

#### **Como foi feito?**

-   Usei o **useState** para gerenciar dois estados:
    -   `seconds`: Armazena o número de segundos que o cronômetro está contando.
    -   `isRunning`: Indica se o cronômetro está ativo ou não.
-   Usei o **useRef** para guardar a referência do intervalo criado pelo **setInterval**, permitindo controlar o início, pausa e reset do cronômetro.
-   Criei três funções principais:
    -   **startStopwatch**: Inicia a contagem, mas só se o cronômetro não estiver rodando, evitando múltiplos intervalos.
    -   **stopStopwatch**: Pausa o cronômetro se ele estiver ativo.
    -   **resetStopwatch**: Para o cronômetro, zera os segundos e redefine o estado de execução.

----------

#### **Código:**

```javascript
const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) {
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
```

----------

#### **Por que é útil?**

Cronômetros são ferramentas comuns em muitos cenários:

-   Medir o tempo de execução de tarefas.
-   Aplicativos de treino, como contagem de tempo de exercícios.
-   Lembretes temporizados em aplicativos de produtividade.
----------

### 3. Exercício - Alternância de Tema

Este exercício usa o Context API (useContext) para criar um tema global (Claro/Escuro) e o useEffect para atualizar dinamicamente os estilos da página.

*Como foi feito?*

-   Criei um ThemeContext com a API de Contexto do React para armazenar o estado do tema.
-   Usei o useState dentro de um ThemeProvider para alternar entre os temas "Claro" e "Escuro".
-   O useEffect é usado para alterar o estilo do document.body quando o tema muda.
-   O componente ThemeToggle permite alternar o tema clicando em um botão.

*Código:*

*ThemeProvider:*


```javascript
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
};` 
```
*ThemeToggle:*

```javascript
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>O tema atual é: {theme}</p>
      <button onClick={toggleTheme}>Alternar Tema</button>
    </div>
  );
};` 
```
*Integrando no App.js:*
```javascript
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
```
*Por que é útil?*

Esse exercício mostra como criar um estado global usando o Context API e como usar o useEffect para alterar dinamicamente elementos fora do React, como o document.body.

#Print do site
![image](https://github.com/user-attachments/assets/e66a9259-53c8-44be-8f17-06ab59463592)
![image](https://github.com/user-attachments/assets/cc10b3c4-a1bc-446c-b58c-f031cf7715dc)

