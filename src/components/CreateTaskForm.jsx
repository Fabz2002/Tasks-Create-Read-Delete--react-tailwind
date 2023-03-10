import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function CreateTaskForm() {
	const { createTask, tasks, task, setTask } = useContext(TaskContext);

	function handleSubmitCreateTask(e) {
		const idTask = tasks.length;
		e.preventDefault();
		createTask({
			titleForm: task.titleForm,
			descriptionForm: task.descriptionForm,
			idForm: idTask,
		});
	}
	return (
		<form className='bg-slate-700 p-10 mb-4' onSubmit={handleSubmitCreateTask}>
			<h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
			<input
				placeholder='Escribe tu tarea'
				onChange={e => {
					setTask({
						...task,
						titleForm: e.target.value,
					});
				}}
				value={task.titleForm}
				className='bg-slate-500 p-3 w-full mb-2'
			/>
			<textarea
				placeholder='Escriba la descripcion de la tarea'
				onChange={e => {
					setTask({
						...task,
						descriptionForm: e.target.value,
					});
				}}
				value={task.descriptionForm}
				className='bg-slate-200 p-3 w-full mb-2'
			></textarea>
			<button className='bg-indigo-500 px-3 py-1 text-white ' type='submit'>
				Guardar
			</button>
		</form>
	);
}

export default CreateTaskForm;
