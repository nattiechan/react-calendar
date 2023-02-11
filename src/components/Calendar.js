import './Calendar.css';
import CalendarBox from './CalendarBox';

const DOW = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function Calendar() {
    return (
        <div className="calendar">
            <DowRow />
        </div>
    )
}

function DowRow() {
    const dowBoxes = DOW.map(day => <CalendarBox boxType='dow' text={day} key={day} />)
    return (
        <>
            {dowBoxes}
        </>
    );
}