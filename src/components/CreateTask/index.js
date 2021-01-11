import React, { useState } from 'react'
import { MdAdd, MdClose } from 'react-icons/md'
import { v4 as uuid } from 'uuid'

import './styles.scss'

const CreateTask = ({ columnTasks, setColumnTasks }) => {
    const [newTaskValue, setNewTaskValue] = useState('')
    const [addClicked, setAddClicked] = useState(false)

    const addTaskClicked = () => setAddClicked(!addClicked)

    const handleInputChange = (event) => setNewTaskValue(event.target.value)

    const handleAddTask = (event) => {
        event.preventDefault()

        if (newTaskValue === '') return

        const newTask = {
            id: uuid(),
            content: newTaskValue,
        }

        columnTasks.push(newTask)
        setColumnTasks([...columnTasks, newTask])

        setNewTaskValue('')
    }

    return (
        <div className="create-task-container">
            {addClicked ? (
                <div className="add-input">
                    <form onSubmit={handleAddTask}>
                        <textarea
                            className="text-area"
                            value={newTaskValue}
                            onChange={handleInputChange}
                            placeholder="Description..."
                        />
                        <div className="buttons-area">
                            <button className="add-btn" type="submit">
                                Create
                            </button>
                            <MdClose
                                className="icon"
                                size={18}
                                onClick={addTaskClicked}
                            />
                        </div>
                    </form>
                </div>
            ) : (
                <div className="add-area" onClick={addTaskClicked}>
                    <MdAdd className="icon" size={18} />
                    <p>Create task</p>
                </div>
            )}
        </div>
    )
}

export default CreateTask
