import { useState } from 'react';

import './Home.css';

import { Input } from "../components/Input/Input.jsx"
import { Reminder } from '../components/Reminder/Reminder';
import { Filter } from '../components/Filter/Filter';



export const Home = () => {

  const [reminders, setReminders] = useState([]);
  const [filterReminders, setFilterReminders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [valueFilter, setValueFilter] = useState('')


  const removeClassActiveBoxInput = (e) => {
    const boxInput = e.currentTarget;
    const input = e.currentTarget.querySelector("input");
    if (!!input.value) {
      boxInput.classList.remove('active')
      boxInput.classList.remove('hidden')
    } else boxInput.classList.add('active')
  }

  const createNewReminder = (e) => {
    e.preventDefault();

    const newReminder = {
      id: reminders.length + 1,
      task: document.querySelector('input#ipt-name-task').value,
      date: document.querySelector('input#ipt-date-task').value,
      time: document.querySelector('input#ipt-time-task').value,
    }

    if (newReminder.task && newReminder.date && newReminder.time) {
      setReminders(reminders.concat(newReminder));
      setFilterReminders(reminders.concat(newReminder))
      clearForm();
    } else alert("preencha todos os campos!")
  }

  const clearForm = () => {
    const form = document.querySelector("form.form");
    form.reset()
  }

  const handleBoxFilter = () => {
    setIsOpen(!isOpen)
  }

  const handleFilterReminder = (event) => {
    const { value } = event.target

    setValueFilter(value);

    value ? setFilterReminders(reminders.filter(reminder =>
      reminder.task.toLowerCase().includes(value.toLowerCase())
    )) : setFilterReminders(reminders);
  }


  return (
    <div className="container">
      <h1>Crie seus lembretes</h1>
      <form className="form">
        <Input
          textLabel="Digite o nome da tarefa"
          onchange={removeClassActiveBoxInput}
          type="text"
          id="ipt-name-task"
        />
        <Input
          className
          textLabel="Lembrar na data:"
          onchange={removeClassActiveBoxInput}
          type="date"
          id="ipt-date-task"
        />
        <Input
          textLabel="Lembrar na hora:"
          onchange={removeClassActiveBoxInput}
          type="time"
          id="ipt-time-task"
        />
        <button onClick={createNewReminder}>Criar Lembrete</button>
        <Filter
          onclick={handleBoxFilter}
          open={isOpen}
          onchange={handleFilterReminder}
        />
      </form>
      <div className="container-reminder">
        {filterReminders.length ? filterReminders.map(reminder => {
          return (
            <Reminder
              key={reminder.id}
              task={reminder.task}
              date={reminder.date}
              time={reminder.time}
  
            />
          )
        }) : <h2>Não há lembretes =(</h2>}
      </div>
    </div>
  );
}


