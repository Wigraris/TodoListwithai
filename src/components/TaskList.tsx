import {Todo} from '../types';

interface TaskListProps {
    tasks: Todo[]
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}
export const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          <span onClick={() => onToggle(task.id)}>{task.text}</span>
          <button onClick={() => onDelete(task.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};