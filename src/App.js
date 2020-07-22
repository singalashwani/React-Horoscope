import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Signs from './Signs';
import Timeframe from './Timeframe';
import Horoscope from './Horoscope';

let App = () => {

  let [signSelectedByUser, setSignSelectedByUser] = useState();
  let [timeframeSelectedByUser, settimeframeSelectedByUser] = useState();

  let selectedSign = (sign) => {
    console.log(sign); 
    setSignSelectedByUser(sign);
  }
  
  let selectedTimeframe = (timeframe) => {
    console.log(timeframe);  
    settimeframeSelectedByUser(timeframe);
  }

  let reset = () => {
    setSignSelectedByUser("");
    settimeframeSelectedByUser("");
  }

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">The Horoscope App</h1>
          {!signSelectedByUser && <Signs parentCallbackSelectedSign = {selectedSign} />}
          {signSelectedByUser && !timeframeSelectedByUser && <Timeframe parentCallbackSelectedTimeframe = {selectedTimeframe} />}
          {timeframeSelectedByUser && <Horoscope sign={signSelectedByUser} timeframe={timeframeSelectedByUser} />}
          <div className="restartBtn text-center"><button className="btn btn-info" onClick={reset}>Reset</button></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;