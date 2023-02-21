import CalendarBox from './CalendarBox';
import { useEffect, useState } from 'react';

export function DowRow() {
    const [dow, setDow] = useState([]);

    useEffect(() => {
        fetch('/calendar/dow')
            .then(response => response.json())
            .then(json => setDow(json.dow))
    }, []);

    const dowBoxes = dow.length === 0
        ? <></>
        : dow.map(day => <CalendarBox boxType='dow' text={day} key={day} />);

    return (
        <>
            {dowBoxes}
        </>
    );
}

export function ActivityRows() {
    const [schedule, setSchedule] = useState({});

    useEffect(() => {
        fetch('/calendar/schedule')
            .then(response => response.json())
            .then(json => setSchedule(json))
    }, []);

    const createComponents = (entries) =>
        entries === undefined
            ? <></>
            : entries.map(entry => <CalendarBox boxType='activity' text={entry.activity} key={`${entry.day}${entry.timeOfDay}`} />);

    return (
        <>
            {createComponents(schedule.morning)}
            {createComponents(schedule.afternoon)}
            {createComponents(schedule.evening)}
        </>
    )
}