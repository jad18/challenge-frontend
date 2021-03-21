const month_arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
                   "Sep", "Oct", "Nov", "Dec"];

export default function getCurrentDay()
{
    var d = new Date();
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

