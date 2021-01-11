import { useState } from 'react'

import { columnsData } from './data'
import Frame from './components/Frame'

import './App.scss'
import Navbar from './components/Navbar'

function App() {
    const [columns, setColumns] = useState(columnsData)

    return (
        <div className="App">
            <Navbar />
            <Frame columns={columns} setColumns={setColumns} />
        </div>
    )
}

export default App
