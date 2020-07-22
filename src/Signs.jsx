import React, { useEffect, useState } from 'react';
import axios from 'axios';

let Signs = ({ parentCallbackSelectedSign }) => {

    let [signs, setSigns] = useState([]);

    useEffect(() => {
        async function getData() {
            let response = await axios.get('http://sandipbgt.com/theastrologer/api/sunsigns/');
            console.log(response.data);
            setSigns(response.data);
        }
        getData();
    }, [])

    let signClick = (sign) => {
        parentCallbackSelectedSign(sign);
    };

    return (
        <>
            <h5 className="text-center">Please select Sign</h5>
            <div className="signs">
            {signs.map((sign, index) => {
                return <button key={index} className="btn btn-outline-light" onClick={() => {signClick(sign)}}>{sign}</button>
            })}
            </div>
        </>
    );
};

export default Signs;