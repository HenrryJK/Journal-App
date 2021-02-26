import React from 'react'
import { Sidebar } from './components/journal/Sidebar'
import { AppRouter } from './routers/AppRouter'

export const JournalApp = () => {
    return (
        <div className="journal__main-content">
            <Sidebar/>
        <main>
            <h1> Main content</h1>

        </main>
        
        </div>

    )
}
