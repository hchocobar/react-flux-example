import React, {useState} from 'react';

export const Profile = () => {
    const [backColor, setBackColor] = useState('dark')

    return (
        <div className={backColor}>
            <h1>Profile</h1>
            <button onClick={() => setBackColor('dark')}>Dark</button>
            <button onClick={() => setBackColor('light')}>Light</button>
            <span> with useState</span>
        </div>        
    )
}