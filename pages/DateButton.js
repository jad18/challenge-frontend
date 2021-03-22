import styles from "../styles/DateButton.module.css";

export default function DateButton(props)
{
    return(
        <button className={styles.date_button}
                onClick={() => updateButtonState(props)}>
            {props.value}
        </button>
    );
}

function updateButtonState(props)
{
    var dateStr = props.obj.state.birthday;
    var level = props.obj.state.level;

    if(props.obj.state.birthdayLevel === 1) dateStr += " ";
    else if(props.obj.state.birthdayLevel === 2)
    {
        dateStr += ", ";
        level++;
    }

    dateStr += props.value;
    props.obj.setState({ birthdayLevel: props.obj.state.birthdayLevel + 1,
                     birthday: dateStr,
                     level: level }
                  );
}