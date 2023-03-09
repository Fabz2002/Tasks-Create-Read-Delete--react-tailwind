import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
	return (
		<div className='bg-zinc-900 h-screen'>
			<main className='container mx-auto p-10'>
				<TaskForm />
				<TaskList />
			</main>
		</div>
	);
}

export default App;
