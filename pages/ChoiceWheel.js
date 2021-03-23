import styles from '../styles/ChoiceWheel.module.css'

export default function ChoiceWheel(props)
{
    const start = props.start;
    const end = props.end;
    var value = props.begin;
    var pos_fin;
    var pos_init;

    function getEntries()
    {
        return ([...Array(props.end - props.start + 1)].map((value, index) => {
            return (<div id={props.id + (index + props.start)}>
                        {index + props.start}
                    </div>);
        }));
    }

    return(
        <div className={styles.wheel_section_container} id={props.id + "-container"}>
            <div id={props.id} className={styles.wheel_section} onMouseDown={dragWheel}>
                {getEntries()}
            </div>
        </div>
    );

    function dragWheel(event)
    {
        const element = document.getElementById(props.id);
        event.preventDefault();
        pos_init = event.clientY;
        element.onmousemove = moveWheel;
        element.onmouseup = setWheel;
    }

    function moveWheel(event)
    {
        const element = document.getElementById(props.id);
        event.preventDefault();
        pos_fin = pos_init - event.clientY;
        pos_init = event.clientY;
        element.style.top = (element.offsetTop - pos_fin) + "px";
    }

    function setWheel()
    {
        const element = document.getElementById(props.id);
        element.onmousemove = null;
        element.onmouseup = null;
    }
}