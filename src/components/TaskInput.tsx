import React, {useState} from 'react'
interface TaskInputProps {
    onAdd: (text:string) => void;
}
export const TaskInput: React.FC<TaskInputProps> = ({onAdd}) => {
    const[value, setValue] = useState('');

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        if (value.trim()){
            onAdd(value)
            setValue('')
        }
    };

    return (
    <form onSubmit={handleSubmit}>
      <input 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="Что нужно сделать?" 
      />
      <button type="submit">Добавить</button>
    </form>
  );
};