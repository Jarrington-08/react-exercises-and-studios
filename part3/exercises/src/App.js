import './App.css';
import HobbyIntroduction from "./components/Introductions";
import MyProjects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <h1>My Hobby: Video Games</h1>
      <HobbyIntroduction />
      <MyProjects />
    </div>
  );
}

export default App;
