import './Timer.css';
import React, { useState } from 'react';

function Timer() {

    const [timer, controlTimer] = useState('start');

    return(
        <div className="timer-shape">
            <div className="ring">
                <div className="timer-container">
                    <div className="time">
                        <h1>25:00</h1>
                    </div>
                    <div className="timer-controls">
                        <div className={`control ${timer === 'start' ? 'active' : ''}`} onClick={() => controlTimer('pause')}>
                            <h2>start</h2>
                        </div>
                        <div className={`control ${timer === 'pause' ? 'active' : ''}`} onClick={() => controlTimer('start')}>
                            <h2>pause</h2>
                        </div>
                        <div className={`control ${timer === 'restart' ? 'active' : ''}`}>
                            <h2>restart</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timer;