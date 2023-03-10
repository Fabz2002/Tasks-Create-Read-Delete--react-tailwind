import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import CreateTaskForm from './CreateTaskForm';
import EditTaskForm from './EditTaskForm';
function TaskForm() {
	const { isEdit } = useContext(TaskContext);

	return (
		<div className='max-w-md mx-auto'>
			{isEdit ? <EditTaskForm /> : <CreateTaskForm />}
		</div>
	);
}

export default TaskForm;
