import { useState } from 'react'
import './App.scss'

import {tasks} from '@/data.js'
import Dashboard from '@/components/Dashboard/Dashboard.jsx'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Dashboard tasks={tasks}/>
        </>
    )
}

export default App
