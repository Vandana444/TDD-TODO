import React from 'react';


/**
* Props
* - task: { id, text, completed }
* - onToggle: function(id)
* - onRemove: function(id)
*/
export default function TaskItem({ task, onToggle, onRemove }){
return (
<li className="task-item" data-testid={`task-${task.id}`}>
<label>
<input
type="checkbox"
checked={task.completed}
onChange={() => onToggle(task.id)}
aria-label={`toggle-${task.id}`}
/>
<span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
</label>
<button aria-label={`remove-${task.id}`} onClick={() => onRemove(task.id)}>Remove</button>
</li>
);
}