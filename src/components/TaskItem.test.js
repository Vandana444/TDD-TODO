import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskItem from './TaskItem';


const sample = { id: '1', text: 'Hello', completed: false };


test('renders task text and checkbox state', () => {
render(<TaskItem task={sample} onToggle={() => {}} onRemove={() => {}} />);
expect(screen.getByText('Hello')).toBeInTheDocument();
const cb = screen.getByRole('checkbox');
expect(cb).not.toBeChecked();
});


test('calls onToggle and onRemove handlers', async () => {
const onToggle = jest.fn();
const onRemove = jest.fn();
render(<TaskItem task={sample} onToggle={onToggle} onRemove={onRemove} />);
const cb = screen.getByRole('checkbox');
const button = screen.getByRole('button', { name: /remove/i });


await userEvent.click(cb);
expect(onToggle).toHaveBeenCalledWith('1');


await userEvent.click(button);
expect(onRemove).toHaveBeenCalledWith('1');
});