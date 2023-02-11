export default function CalendarBox(props) {
    return (
        <div id={props.id} className={props.boxType}>
            {props.text}
        </div>
    )
}