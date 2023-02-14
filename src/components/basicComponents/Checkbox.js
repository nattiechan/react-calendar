export default function Checkbox(props) {
    const { handleClick, defualtChecked } = props;
    return <input type='checkbox' onClick={handleClick} defaultChecked={defualtChecked} />;
}