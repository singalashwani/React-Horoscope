import React from 'react';

let Timeframe = ({ parentCallbackSelectedTimeframe }) => {

    let timeframeClick = (timeframe) => {
        parentCallbackSelectedTimeframe(timeframe);
    };

    return (
        <>
            <h5 className="text-center">Please select Timeframe</h5>
            <div className="signs">
            {['yesterday', 'today', 'tomorrow'].map((timeframe, index) => {
                return <button key={index} className="btn btn-outline-light" onClick={() => {timeframeClick(timeframe)}}>{timeframe}</button>
            })}
            </div>
        </>
    );
};

export default Timeframe;