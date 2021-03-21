import styles from '../styles/Avatars.module.css'

const avatar_list = ['🤖', '👽'];

export default function Avatars(props)
{
    var avatar1, avatar2;
    if(props.index1 < 0 || props.index1 >= avatar_list.length)
        avatar1 = "";
    else avatar1 = avatar_list[props.index1];

    if(props.index2 < 0 || props.index2 >= avatar_list.length)
        avatar2 = "";
    else avatar2 = avatar_list[props.index2];

    return(
        <div>
            <div className={styles.avatar_circle}>{avatar1}</div>
            <div className={styles.avatar_circle}>{avatar2}</div>
        </div>
    )
}