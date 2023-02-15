import './CalendarContainer.css';
import { DowRow, ActivityRows } from './CalendarRow'

export default function CalendarContainer() {
    return (
        <div className='calendarContainer'>
            <div className="calendar">
                <DowRow />
                <ActivityRows />
            </div>
        </div>
    )
}