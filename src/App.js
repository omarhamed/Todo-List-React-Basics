import Header from "./components/Header";
import TodoList from "./views/TodoList";
import "./assets/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
