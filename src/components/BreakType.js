import './BreakType.css';
import React, { useState } from 'react';

function BreakType() {
    const [breakType, setBreakType] = useState('pomodoro');

    return(
        <div className="break-selector-container">
            <div className={`break ${breakType === 'pomodoro' ? 'selected' : ''}`} onClick={() => setBreakType('pomodoro')}>
                <h3>pomodoro</h3>
            </div>
            <div className={`break ${breakType === 'short' ? 'selected' : ''}`} onClick={() => setBreakType('short')}>
                <h3>short break</h3>
            </div>
            <div className={`break ${breakType === 'long' ? 'selected' : ''}`} onClick={() => setBreakType('long')}>
                <h3>long break</h3>
            </div>
        </div>
    );
}

export default BreakType;