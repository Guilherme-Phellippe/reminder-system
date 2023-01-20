import './input.css'

export const Input = ({ onchange, textLabel, type, id }) => (
  <div className={type == 'text'?'input active':'input hidden'} onChange={onchange}>
    <label htmlFor="ipt-name-task">{textLabel}</label>
    <input type={type} id={id} />
  </div>
)
