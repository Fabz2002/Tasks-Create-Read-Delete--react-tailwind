import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
export default function TaskCard({ task }) {
	const { deleteTask, setIsEdit, setSelectedTaskId, setTask } =
		useContext(TaskContext);
	const HandleEditTaskClick = e => {
		setSelectedTaskId(task.id);
		setTask({
			titleForm: task.title,
			descriptionForm: task.description,
			idForm: task.id,
		});
		setIsEdit(true);
	};
	return (
		<div className='bg-gray-800 text-white p-4 rounded-md'>
			<h1 className='text-xl font-bold capitalize'>{task.title}</h1>
			<p className='text-gray-500 text-sm'>{task.description}</p>
			<button
				className='bg-teal-500 px-2 py-1 rounded-md mt-4 hover:bg-red-600'
				onClick={() => deleteTask(task.id)}
			>
				Eliminar tarea
			</button>
			<button
				className='bg-blue-500 px-2 py-1 rounded-md ml-4 hover:scale-105'
				onClick={HandleEditTaskClick}
			>
				Editar Tarea
			</button>
		</div>
	);
}
