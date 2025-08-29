import React from 'react';
import TaskItem from './TaskItem';


/**
* Props
* - tasks: array of {id, text, completed}
* - onToggle: function(id)
* - onRemove: function(id)
*/
export default function TaskList({ tasks, onToggle, onRemove }){
if (!tasks || tasks.length === 0) return <p>No tasks yet</p>;


return (
<ul>
{tasks.map(t => (
<TaskItem key={t.id} task={t} onToggle={onToggle} onRemove={onRemove} />
))}
</ul>
);
}