import React, { useRef, useState } from 'react';
import List from './List';

function Input() {
    const inpRef = useRef('');
    const [val, setVal] = useState('');
    const [arrVal, setarrVal] = useState([]);
    
    function add(e) {
        setVal(e.target.value);
        console.log(val);
    }

    function create() {
        if (val !== '') {
            setarrVal([...arrVal ,val]);
            console.log(arrVal);
            setVal('');
        }
    }

    return (
        <>
            <h1>To Do List</h1>
            <div className="input-label">
                <input onChange={add} ref={inpRef} id="input" type="text" value={val}/>
                <button onClick={create} id="btn">Add</button>
            </div>
            <div className="content">
                <ol className="ol">
                    {arrVal.map((item, ind) => <List key={ind} item = {item} arrVal={arrVal} setarrVal={setarrVal} />)}
                </ol>
            </div>
        </>
    );
}

export default Input;
