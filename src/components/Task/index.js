import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import './styles.scss'

const Task = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="task"
                >
                    <p>{task.content}</p>
                </div>
            )}
        </Draggable>
    )
}

export default Task
