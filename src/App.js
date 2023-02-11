import './App.css';
import Calendar from './components/Calendar';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="frame">
      <Header />
      <Calendar />
      <ToDoList />
    </div>
  );
}

export default App;
