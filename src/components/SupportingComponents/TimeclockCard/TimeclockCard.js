import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import './TimeclockCard.scss';


class TimeclockCard extends React.Component {

  constructor(props) {
    super(props);
    
  }

  state = {
    currentTime: "00:00",
    isFocusMode: true
  }

  startTime = () => {
    const today = new Date();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = this.minuteCheck(this.checkTime(m),s);
    s = this.secondCheck(s);

    const currentTime = m + ":" + s;

    this.setState({currentTime: currentTime});

    const t = setTimeout(this.startTime, 500);
  }
  
  minuteCheck = (min,sec) => {
    if(sec === 0) {
      this.setState({isFocusMode: false});
      min--;
    }
    
    if(min <= 25){
      this.setState({isFocusMode: true});
      return 25 - min;
    } else if(min > 25 && min <= 30) {
      this.setState({isFocusMode: false});
      return 30 - min;
    } else if(min <= 55) {
      this.setState({isFocusMode: true});

      return 55 - min;
    } else {
      this.setState({isFocusMode: false});
      return 60 - min;
    }
  };
  
  
  secondCheck = sec => {
    if(sec === 0) return this.checkTime(0);

    const finalSec = 60-sec;
    return this.checkTime(finalSec);
  };
  
  
  checkTime = i => {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  componentDidMount() {
    this.startTime();
  }

  // Determines what dom elements get rendered to the page
  render(){

    // Props 

    // Inline Styles

    const style = {
      card: {
        width: '18rem'
      }
    }

    return (<div className="" id="TimeclockCard">
              <div className="card" style={style}>
                <div className="card-body" id="clock">
                  <div className="card-title-container">
                    <h5 className={"card-title" + (this.state.isFocusMode ? ' active-focus' : '')}>Focus</h5>
                    <h5 className={"card-title" + (this.state.isFocusMode ? '' : ' active-relax')}>Relax</h5>
                  </div>
                  <p className="card-text time">
                    {this.state.currentTime}
                  </p>
                </div>
              </div>
            </div>)
  }
}

export default TimeclockCard;
