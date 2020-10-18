import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Portal = (props) => {
    return ReactDOM.createPortal(props.controls,
        document.getElementById('overlay')
    );
};


/** 
  * @desc A menu with some controls
  * @author Maximiliano Goffman
*/
const ElementsMenuComponent = (props) => {
    const [overlayElement, setOverlayElement] = useState([]);
    
    const buttonControlClick = (event) => {
        event.preventDefault();
    setOverlayElement([
        ...overlayElement,
        <button 
            style={
                {
                    top: `${Math.random() * 100}%`, 
                    left: `${Math.random() * 100}%`,
                    position: "relative" 
                }
            }
            key={overlayElement.length}
        >Button</button>
    ]);
    };
    const textInputControlClick = (event) => {
        event.preventDefault();
        setOverlayElement([
            ...overlayElement,
            <input 
                style={
                    {
                        top: `${Math.random() * 100}%`, 
                        left: `${Math.random() * 100}%`,
                        position: "relative" 
                    }
                }
                key={overlayElement.length} 
                type="text" 
                placeholder="Enter text" />
        ]);
    };
    const selectControlClick = (event) => {
        event.preventDefault();
        setOverlayElement([
            ...overlayElement,
            <select 
            style={
                {
                    top: `${Math.random() * 100}%`, 
                    left: `${Math.random() * 100}%`,
                    position: "relative" 
                }
            }
            key={overlayElement.length}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        ]
        );
    };
    
    return (
        <React.Fragment>
            <div id="menu">
                <button onClick={buttonControlClick}>Button</button>
                <input type="text" placeholder="Enter text" onClick={textInputControlClick} />
                <select onMouseDown={selectControlClick}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            {overlayElement.length && <Portal controls={overlayElement} /> }
        </React.Fragment>
    );
}


export default ElementsMenuComponent;