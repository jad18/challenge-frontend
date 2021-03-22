import DateButton from './DateButton';
import styles from '../styles/DateButton.module.css'

const month_arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
                   "Sep", "Oct", "Nov", "Dec"];

const month_days = {"Jan": 31, "Feb": 28, "Mar": 31, "Apr": 30, "May": 31,
                    "Jun": 30, "Jul": 31, "Aug": 31, "Sep": 30, "Oct": 31,
                    "Nov": 30, "Dec": 31};

export default function getCurrentDay()
{
    const d = new Date();
    const month = d.getMonth();
    var dateStr = month_arr[month];
    dateStr += " " + d.getDate();
    dateStr += ", " + d.getFullYear();
    return dateStr;
}

export function formatAndSetDate(month, day, year, state, setState)
{
    var dateStr = month_arr[month];
    dateStr += " " + day;
    dateStr += ", " + year;
    state.birthday = dateStr;
    setState(state);
    return dateStr;
}


export function BirthdayMonth(obj)
{
    console.log(obj.state);
    return (month_arr.map(function(key) {
            return <DateButton value={key} obj={obj} />;
        }
    ));
}

export function BirthdayDay(obj)
{
    const days = month_days[obj.state.birthday];
    console.log(obj.state);

    return [...Array(days)].map((value, index) =>
        <DateButton value={index + 1} obj={obj} />);
}

export function BirthdayYear(obj)
{
    const d = new Date();
    console.log(obj.state);
    var cur_year = d.getFullYear();
    var year_mod = cur_year % 10;
    var child_blocks = [<h4 className={styles.date_header}>{cur_year - year_mod}s</h4>];

    while(year_mod >= 0)
    {
        child_blocks.push(<DateButton value={cur_year} obj={obj} />);
        cur_year--;
        year_mod--;
    }

    for(var i = 0; i<10; i++)
    {
        child_blocks.push(<br/>);
        child_blocks.push(<h4 className={styles.date_header}>{cur_year - 9}s</h4>);
        for(var j = 0; j<10; j++)
        {
            child_blocks.push(<DateButton value={cur_year} obj={obj} />);
            cur_year--;
        }
    }

    return(
        <div>
            {child_blocks}
        </div>
    );



    return [...Array(100 + year_mod + 1)].map((value, index) =>
        <DateButton value={cur_year - index} obj={obj} />);

}

