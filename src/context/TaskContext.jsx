import { createContext, useState, useEffect } from 'react';
import { tasks as data } from '../data/tasks';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
	const [tasks, setTasks] = useState(data);
	const [isEdit, setIsEdit] = useState(false);
	const [task, setTask] = useState({
		titleForm: '',
		descriptionForm: '',
		idForm: '',
	});
	const [selectedTaskId, setSelectedTaskId] = useState('');

	function createTask(task) {
		setTasks([
			...tasks,
			{
				id: task.idForm,
				title: task.titleForm,
				description: task.descriptionForm,
			},
		]);
	}
	function deleteTask(taskId) {
		setTasks(tasks.filter(t => t.id !== taskId));
	}
	function editTask(task) {
		const temp = [...tasks];
		const item = temp.find(t => t.id === task.idForm);
		item.title = task.titleForm;
		item.description = task.descriptionForm;
		setTasks(temp);
	}
	return (
		<TaskContext.Provider
			value={{
				tasks,
				deleteTask,
				createTask,
				isEdit,
				setIsEdit,
				editTask,
				setTask,
				task,
				selectedTaskId,
				setSelectedTaskId,
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
}
