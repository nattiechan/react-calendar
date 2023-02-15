export default function CalendarBox(props) {
    const { id, boxType, text } = props;
    return (
        <div id={id} className={boxType}>
            {text}
        </div>
    )
}