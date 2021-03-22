import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
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
            {draggableWheel(document.getElementById(props.id), props)}
        </>
    );
}

function draggableWheel(element, props)
{
    const start = props.start;
    const end = props.end;
    var value = props.begin; 

    

    function dragWheel(event)
    {
        event.preventDefault();
        return (<div></div>);
    }
}