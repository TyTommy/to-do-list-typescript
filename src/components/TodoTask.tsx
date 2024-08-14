import { ITask } from '../Interfaces';

interface Props {
    task: ITask;
    compeleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, compeleteTask }: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => {
                compeleteTask(task.taskName)
            }}>X</button>
        </div>
    )
}

export default TodoTask