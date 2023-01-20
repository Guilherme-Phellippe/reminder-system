import './reminder.css'

export const Reminder = ({ task, date, time }) => {
    return (
        <div className="card-task">
            <h2>Lembrete</h2>
            <h3>{task}</h3>
            <div className="box-time">
                <p>{date}</p>
                <p>{time}</p>
            </div>
        </div>
    )
}