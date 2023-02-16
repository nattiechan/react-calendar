import './CalendarContainer.css';
import { DowRow, ActivityRows } from './CalendarRow'

export default function CalendarContainer() {
    return (
        <section className='calendarContainer'>
            <div className="calendar">
                <DowRow />
                <ActivityRows />
            </div>
        </section>
    )
}