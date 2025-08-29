import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskInput from './TaskInput';


test('input value updates when user types', async () => {
render(<TaskInput onAddTask={() => {}} />);
const input = screen.getByLabelText('task-input');
await userEvent.type(input, 'Buy milk');
expect(input).toHaveValue('Buy milk');
});


test('calls onAddTask and clears input on submit', async () => {
const onAdd = jest.fn();
render(<TaskInput onAddTask={onAdd} />);
const input = screen.getByLabelText('task-input');
const button = screen.getByRole('button', { name: /add/i });
await userEvent.type(input, 'Test task');
await userEvent.click(button);
expect(onAdd).toHaveBeenCalledWith('Test task');
expect(input).toHaveValue('');
});