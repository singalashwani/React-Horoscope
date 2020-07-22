import React, { useEffect, useState } from 'react';
import axios from 'axios';

let Horoscope = (props) => {

    let [horoscope, setHoroscope] = useState("");

    useEffect(() => {
        async function getData() {
            let response = await axios.get(`http://sandipbgt.com/theastrologer/api/horoscope/${props.sign}/${props.timeframe}`);
            console.log(response.data.horoscope);
            setHoroscope(response.data.horoscope);
        }
        getData();
    }, [])

    return (
        <>
            <h5 className="text-center">{props.timeframe}, your Horoscope for {props.sign} is...</h5>
            <div className="horoscope">
                {horoscope}
            </div>
        </>
    );
};

export default Horoscope;