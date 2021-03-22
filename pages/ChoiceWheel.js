import styles from '../styles/ChoiceWheel.module.css'

export default function ChoiceWheel(props)
{
    function getEntries()
    {
        return ([...Array(props.end - props.start + 1)].map((value, index) => {
            return (<div id={props.id + (index + props.start)}>
                        {index + props.start}
                    </div>);
        }));
    }

    return(
        <>
            <div id={props.id} className={styles.wheel_section}>
                {getEntries()}
            </div>
        </>
    );
}

function draggableWheel(element, props)
{
    const start = props.start;
    const end = props.end;
    var value = props.begin;
    var pos_fin;
    var pos_init;

    element.onmousedown = dragWheel;

    function dragWheel(event)
    {
        event.preventDefault();
        pos_init = event.clientY;
        element.onmouseup = setWheel;
        element.onmousemove = moveWheel;
    }

    function moveWheel(event)
    {
        event.preventDefault();
        pos_fin = pos_init - event.clientY;
        pos_init = event.clientY;
        element.style.top = (element.offsetTop - pos_fin) + "px";
    }

    function setWheel()
    {
        element.onmouseup = null;
        element.onmousemove = null;
    }
}