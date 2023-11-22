import React from 'react';

function List({item, arrVal, setarrVal}) {

    function sil() {
        let index = arrVal.findIndex(i => i == item)
        let newArr = [...arrVal]
        newArr.splice(index, 1)
        setarrVal(newArr)
        // setarrVal([...arrVal].filter(i => i !== item))
    }

    return (
        <li>
            {item} <button id='deleteBtn' onClick={sil}>Delete</button>
        </li>
    );
}

export default List;
