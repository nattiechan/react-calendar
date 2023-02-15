import './App.css';
import CalendarContainer from './calendar/CalendarContainer';
import HeaderContainer from './header/HeaderContainer';
import ToDoContainer from './todo/ToDoContainer';
import WeatherContainer from './weather/WeatherContainer';

function App() {
  return (
    <div className="frame">
      <HeaderContainer />
      <CalendarContainer />
      <ToDoContainer />
      <WeatherContainer />
    </div>
  );
}

export default App;
