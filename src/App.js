import './App.css';
import Calendar from './components/calendar/Calendar';
import Header from './components/header/Header';
import ToDo from './components/toDo/ToDo';

function App() {
  return (
    <div className="frame">
      <Header />
      <div class='calendarGrid'>
        <Calendar />
      </div>
      <ToDo />
    </div>
  );
}

export default App;
