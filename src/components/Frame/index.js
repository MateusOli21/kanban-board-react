import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import Column from '../Column'

import './styles.scss'

const Frame = ({ columns, setColumns }) => {
    const handleOnDragEnd = (result, columns, setColumns) => {
        const { source, destination } = result

        if (!destination) return

        if (source.droppableId === destination.droppableId) {
            const column = columns[source.droppableId]
            const copiedItems = [...column.tasks]

            const [removed] = copiedItems.splice(source.index, 1)
            copiedItems.splice(destination.index, 0, removed)

            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    tasks: copiedItems,
                },
            })
        }

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId]
            const destColumn = columns[destination.droppableId]

            const sourceItems = [...sourceColumn.tasks]
            const destItems = [...destColumn.tasks]

            const [removed] = sourceItems.splice(source.index, 1)
            destItems.splice(destination.index, 0, removed)

            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    tasks: sourceItems,
                },
                [destination.droppableId]: {
                    ...destColumn,
                    tasks: destItems,
                },
            })
        }
    }

    return (
        <div className="frame-container">
            <h2 className="frame-title">CRM - Renda Variável</h2>

            <div className="frame">
                <DragDropContext
                    onDragEnd={(result) =>
                        handleOnDragEnd(result, columns, setColumns)
                    }
                >
                    {Object.entries(columns).map(([columnId, column]) => {
                        return (
                            <Column
                                key={columnId}
                                column={column}
                                columnId={columnId}
                            />
                        )
                    })}
                </DragDropContext>
            </div>
        </div>
    )
}

export default Frame
