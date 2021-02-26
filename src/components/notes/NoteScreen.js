import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-conter">
            <NotesAppBar/>
        <div className="notes__content">
        <input
        type="text"
        placeholder="Some awsome a tittle"
        className="notes_tittle-input"
        autoComplete="off"
        />
        <textarea
        placeholder="What are you doing today ?"
        className="notes_textarea" 
        ></textarea>
        <div className="notes_image">
        <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        alt="imagen"
       />
        </div>

        </div>
        </div>
        
    )
}
