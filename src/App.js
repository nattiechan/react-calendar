import './App.css';
import Calendar from './components/calendar/Calendar';
import Header from './components/header/Header';
import ToDo from './components/toDo/ToDo';
import Weather from './components/weather/Weather';

function App() {
  return (
    <div className="frame">
      <Header />
      <div className='calendarGrid'>
        <Calendar />
      </div>
      <ToDo />
      <Weather />
    </div>
  );
}

export default App;
