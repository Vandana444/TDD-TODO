import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';


test('full flow: add, toggle, remove', async () => {
render(<App />);
const input = screen.getByLabelText('task-input');
const addBtn = screen.getByRole('button', { name: /add/i });


await userEvent.type(input, 'Integration task');
await userEvent.click(addBtn);


expect(screen.getByText('Integration task')).toBeInTheDocument();


const checkbox = screen.getByRole('checkbox');
await userEvent.click(checkbox);
expect(checkbox).toBeChecked();


const removeBtn = screen.getByRole('button', { name: /remove/i });
await userEvent.click(removeBtn);
expect(screen.queryByText('Integration task')).not.toBeInTheDocument();
});