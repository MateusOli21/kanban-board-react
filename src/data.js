import { v4 as uuid } from 'uuid'

const tasksList = [
    { id: uuid(), title: 'Rogério Pereira', content: 'Estruturada' },
    { id: uuid(), title: 'Lígia Rosvald Gusmão', content: 'Call de Bradesco' },
    { id: uuid(), title: 'Lígia Rosvald Gusmão', content: 'Call de Bradesco' },
    { id: uuid(), title: 'Lígia Rosvald Gusmão', content: 'Call de Bradesco' },
    { id: uuid(), title: 'Rogério Pereira', content: 'Call de Bradesco' },
]

const columnsData = {
    [uuid()]: {
        title: 'Sem Contato',
        tasks: tasksList,
    },
    [uuid()]: {
        title: 'Cliente Contatado',
        tasks: [],
    },
    [uuid()]: {
        title: 'Aguardando Push',
        tasks: [],
    },
    [uuid()]: {
        title: 'Aguardando E-mail',
        tasks: [],
    },
    [uuid()]: {
        title: 'Ordem Confirmada',
        tasks: [],
    },
    [uuid()]: {
        title: 'Boletado/Cancelado',
        tasks: [],
    },
}

const columnOrder = [columnsData[0], columnsData[1]]

export { tasksList, columnsData, columnOrder }
