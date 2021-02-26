import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
          <div 
          className ="journal__entry-picture"
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Convex_lens_%28magnifying_glass%29_and_upside-down_image.jpg/341px-Convex_lens_%28magnifying_glass%29_and_upside-down_image.jpg)'
            }}
          ></div>  

            <div className="journal__entry-body">
                <p className="journal__entry-tittle">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                   Have a nice days tomorow let's go !
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>24</h4>
            </div>
        </div>
    )
}
