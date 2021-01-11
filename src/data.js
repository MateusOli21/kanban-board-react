import { v4 as uuid } from 'uuid'

const tasksList = [
    { id: uuid(), content: 'Tarefa um' },
    { id: uuid(), content: 'Tarefa dois' },
    { id: uuid(), content: 'Tarefa três' },
    { id: uuid(), content: 'Tarefa quatro' },
    { id: uuid(), content: 'Tarefa cinco' },
]

const columnsData = {
    [uuid()]: {
        title: 'Tarefas',
        tasks: tasksList,
    },
    [uuid()]: {
        title: 'A fazer',
        tasks: [],
    },
    [uuid()]: {
        title: 'Em progresso',
        tasks: [],
    },
    [uuid()]: {
        title: 'Completo',
        tasks: [],
    },
}

const columnOrder = [columnsData[0], columnsData[1]]

export { tasksList, columnsData, columnOrder }
