import { useState } from 'react'

import { columnsData } from './data'
import Frame from './components/Frame'

import './App.scss'

function App() {
    const [columns, setColumns] = useState(columnsData)

    return (
        <div className="App">
            <Frame columns={columns} setColumns={setColumns} />
        </div>
    )
}

export default App
