import './Calendar.css';
import { schedule } from '../../resources/schedule';

const DOW = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function Calendar() {
    return (
        <div className="calendar">
            <DowRow />
            <ActivityRows />
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

function ActivityRows() {
    // Ideally we will be using `useEffect()` to fetch data via API and set state accordingly
    // Since this is only a mockup of the process, we will utilize a function to construct the components instead
    const getSchedule = () => {
        const morning = Array(7).fill(null);
        const afternoon = Array(7).fill(null);
        const evening = Array(7).fill(null);
        schedule.forEach(entry => {
            switch (entry.timeOfDay) {
                case 1:
                    morning[DOW.indexOf(entry.day)] = entry;
                    break;
                case 2:
                    afternoon[DOW.indexOf(entry.day)] = entry;
                    break;
                case 3:
                    evening[DOW.indexOf(entry.day)] = entry;
                    break;
                default:
                    console.log(`Invalid Entry: ${entry}`);
            }
        })
        return { "morning": morning, "afternoon": afternoon, "evening": evening };
    };

    const createComponents = (entries) => entries.map(entry => <CalendarBox boxType='activity' text={entry.activity} key={`${entry.day}${entry.timeOfDay}`} />);

    const fetchedSchedule = getSchedule();

    return (
        <>
            {createComponents(fetchedSchedule.morning)}
            {createComponents(fetchedSchedule.afternoon)}
            {createComponents(fetchedSchedule.evening)}
        </>
    )
}

function CalendarBox(props) {
    const { id, boxType, text } = props;
    return (
        <div id={id} className={boxType}>
            {text}
        </div>
    )
}