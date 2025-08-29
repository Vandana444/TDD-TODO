import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';


const tasks = [
{ id: 'a', text: 'A', completed: false },
{ id: 'b', text: 'B', completed: true }
];


test('renders tasks when provided', () => {
render(<TaskList tasks={tasks} onToggle={() => {}} onRemove={() => {}} />);
expect(screen.getByText('A')).toBeInTheDocument();
expect(screen.getByText('B')).toBeInTheDocument();
});


test('shows "No tasks yet" when list is empty', () => {
render(<TaskList tasks={[]} onToggle={() => {}} onRemove={() => {}} />);
expect(screen.getByText(/no tasks yet/i)).toBeInTheDocument();
});