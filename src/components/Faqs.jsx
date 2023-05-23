import React, {useState} from 'react';

export const Faqs = () => {
    const [backColor, setBackColor] = useState('light')

    return (
        <div className={backColor}>
            <h2>FAQs</h2>
            <button onClick={() => setBackColor('dark')}>Dark</button>
            <button onClick={() => setBackColor('light')}>Light</button>
            <span> with useState</span>
        </div>        
    )
}