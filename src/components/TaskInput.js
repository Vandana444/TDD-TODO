import React, { useState } from 'react';
export default function TaskInput({ onAddTask }){
const [value, setValue] = useState('');


function handleSubmit(e){
e.preventDefault();
const text = value.trim();
if (!text) return;
onAddTask(text);
setValue('');
}


return (
<form onSubmit={handleSubmit} className="task-input">
<input
aria-label="task-input"
placeholder="Add a new task"
value={value}
onChange={(e) => setValue(e.target.value)}
/>
<button type="submit">Add</button>
</form>
);
}