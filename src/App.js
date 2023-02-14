import './App.css';
import CalendarContainer from './containers/CalendarContainer';
import HeaderContainer from './containers/HeaderContainer';
import ToDoContainer from './containers/ToDoContainer';
import WeatherContainer from './containers/WeatherContainer';

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
