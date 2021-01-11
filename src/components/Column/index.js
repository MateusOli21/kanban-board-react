import React, { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'

import Task from '../Task'
import CreateTask from '../CreateTask'

import './styles.scss'

const Column = ({ columnId, column }) => {
    const [, setColumnTasks] = useState(column.tasks)

    return (
        <div className="column">
            <div className="column-header">
                <h2>{column.title}</h2>
                <p>total: {column.tasks.length}</p>
            </div>

            <Droppable droppableId={columnId} key={columnId}>
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="task-list"
                    >
                        {column.tasks &&
                            column.tasks.map((item, index) => (
                                <Task key={item.id} index={index} task={item} />
                            ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            {column.title === 'Tarefas' && (
                <CreateTask
                    columnTasks={column.tasks}
                    setColumnTasks={setColumnTasks}
                />
            )}
        </div>
    )
}

export default Column
