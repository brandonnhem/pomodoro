import { useState } from 'react';
import './Settings.css';

function Settings({ isOpen, toggleSettings }) {
    
    const [pomodoroTime, setPomodoroTime] = useState(25);
    const [shortTime, setShortTime] = useState(5);
    const [longTime, setLongTime] = useState(15);

    function incrementPomodoro() {
        setPomodoroTime(prevPomodoroTime => prevPomodoroTime + 1);
    }

    function decrementPomodoro() {
        setPomodoroTime(prevPomodoroTime => prevPomodoroTime - 1);
    }

    function incrementShort() {
        setShortTime(prevShortTime => prevShortTime + 1);
    }

    function decrementShort() {
        setShortTime(prevShortTime => prevShortTime - 1);
    }

    function incrementLong() {
        setLongTime(prevLongTime => prevLongTime + 1);
    }

    function decrementLong() {
        setLongTime(prevLongTime => prevLongTime - 1);
    }

    const [font, setFont] = useState('font1');
    const [color, setColor] = useState('color1');

    return(
        <div className="settings-popup" style={ {display: `${isOpen ? 'block' : 'none'}`} }>
            <div className="settings-header">
                <h1>Settings</h1>
                <div className="close-btn" onClick={ toggleSettings }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#1E213F" fill-rule="evenodd" d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z" opacity=".5"/></svg>
                </div>
            </div>

            <hr></hr>

            <section className="time-section">
                <h3>Time (minutes)</h3>
                <div className="time-settings">
                    <div className="time-modifier">
                        <p>pomodoro</p>
                        <div className="time-btns">
                            <span>
                                {pomodoroTime}
                                <div className="arrow-wrap">
                                    <button className="modifier-btn" onClick={ incrementPomodoro }>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7"><path fill="none" stroke="#1E213F" stroke-opacity=".25" stroke-width="2" d="M1 6l6-4 6 4"/></svg>
                                    </button>
                                    <button className="modifier-btn" onClick={ decrementPomodoro }>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7"><path fill="none" stroke="#1E213F" stroke-opacity=".25" stroke-width="2" d="M1 1l6 4 6-4"/></svg>
                                    </button>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="time-modifier">
                        <p>short break</p>
                        <div className="time-btns">
                            <span>
                                {shortTime}
                                <div className="arrow-wrap">
                                    <button className="modifier-btn" onClick={ incrementShort }>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7"><path fill="none" stroke="#1E213F" stroke-opacity=".25" stroke-width="2" d="M1 6l6-4 6 4"/></svg>
                                    </button>
                                    <button className="modifier-btn" onClick={ decrementShort }>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7"><path fill="none" stroke="#1E213F" stroke-opacity=".25" stroke-width="2" d="M1 1l6 4 6-4"/></svg>
                                    </button>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="time-modifier">
                        <p>long break</p>
                        <div className="time-btns">
                            <span>
                                {longTime}
                                <div className="arrow-wrap">
                                    <button className="modifier-btn" onClick={ incrementLong }>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7"><path fill="none" stroke="#1E213F" stroke-opacity=".25" stroke-width="2" d="M1 6l6-4 6 4"/></svg>
                                    </button>
                                    <button className="modifier-btn" onClick={ decrementLong }>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7"><path fill="none" stroke="#1E213F" stroke-opacity=".25" stroke-width="2" d="M1 1l6 4 6-4"/></svg>
                                    </button>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </section>

            <section className="font-section">
                <h3>Font</h3>
                <div className="font-modifier">
                    <div className="font-option" id="font-1" style={ {backgroundColor: `${font === 'font1' ? '#161932' : '#EFF1FA'}`, color: `${font === 'font1' ? '#FFFFFF' : '#1E213F'}`} } onClick={ () => setFont('font1') }>
                        <span id="kumbh-option">Aa</span>
                    </div>
                    <div className="font-option" id="font-2" style={ {backgroundColor: `${font === 'font2' ? '#161932' : '#EFF1FA'}`, color: `${font === 'font2' ? '#FFFFFF' : '#1E213F'}`} } onClick={ () => setFont('font2') }>
                        <span id="roboto-option">Aa</span>
                    </div>
                    <div className="font-option" id="font-3" style={ {backgroundColor: `${font === 'font3' ? '#161932' : '#EFF1FA'}`, color: `${font === 'font3' ? '#FFFFFF' : '#1E213F'}`} } onClick={ () => setFont('font3') }>
                        <span id="space-option">Aa</span>
                    </div>
                </div>
                <hr></hr>
            </section>

            <section className="color-section">
                <h3>Color</h3>
                <div className="color-modifier">
                    <div className="color-option" id="color-1" onClick={ () => setColor('color1') }>
                        <div class="check-wrapper" style={ {display: `${color === 'color1' ? 'block' : 'none'}`} }>
                            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.5L4.95263 9.45263L13.4053 1" stroke="#161932" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>
                    <div className="color-option" id="color-2" onClick={ () => setColor('color2') }>
                        <div class="check-wrapper" style={ {display: `${color === 'color2' ? 'block' : 'none'}`} }>
                            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.5L4.95263 9.45263L13.4053 1" stroke="#161932" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>
                    <div className="color-option" id="color-3" onClick={ () => setColor('color3') }>
                        <div class="check-wrapper" style={ {display: `${color === 'color3' ? 'block' : 'none'}`} }>
                            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.5L4.95263 9.45263L13.4053 1" stroke="#161932" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            
            <button className="apply-btn">
                Apply
            </button>
        </div>
    );
}

export default Settings;