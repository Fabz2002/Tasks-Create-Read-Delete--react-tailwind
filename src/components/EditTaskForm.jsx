import { useState, useEffect, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function EditTaskForm() {
	const { editTask, setIsEdit, task, setTask, selectedTaskId } =
		useContext(TaskContext);
	const handleSubmitEditTask = e => {
		e.preventDefault();
	};
	const handleClickUpdateTask = e => {
		editTask({
			titleForm: task.titleForm,
			descriptionForm: task.descriptionForm,
			idForm: selectedTaskId,
		});
		setIsEdit(false);
		setTask({
			titleForm: '',
			descriptionForm: '',
			idForm: '',
		});
	};
	return (
		<form className='bg-slate-700 p-10 mb-4' onSubmit={handleSubmitEditTask}>
			<h1 className='text-2xl font-bold text-white mb-3'>Edita tu tarea</h1>
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
			<button
				className='bg-indigo-500 px-3 py-1 text-white '
				onClick={handleClickUpdateTask}
				type='button'
			>
				Guardar
			</button>
		</form>
	);
}

export default EditTaskForm;
