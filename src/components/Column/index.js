import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

import Task from '../Task'

import './styles.scss'

const Column = ({ columnId, column }) => {
    return (
        <div className="column">
            <div className="column-header">
                <p>{column.title}</p>
            </div>

            <div className="task-list">
                <Droppable droppableId={columnId} key={columnId}>
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="droppable-area"
                        >
                            {column.tasks &&
                                column.tasks.map((item, index) => (
                                    <Task
                                        key={item.id}
                                        index={index}
                                        task={item}
                                    />
                                ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    )
}

export default Column
