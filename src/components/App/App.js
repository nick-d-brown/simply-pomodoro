import React from 'react';
import './App.scss';
import MessageCard from './../SupportingComponents/MessageCard/MessageCard';
import TimeclockCard from './../SupportingComponents/TimeclockCard/TimeclockCard';
import MessageBoard from './../SupportingComponents/MessageBoard/MessageBoard';
import CookieBanner from 'react-cookie-banner';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.setCookie = this.setCookie.bind(this);
    
  }

  state = {
    howThisWorks: {
      header: 'How does this work?!',
      body: 'This app is meant to be a continuous pomodoro timer. It is running 24/7 at 25 minute focus segments and 5 minute relax segments. This way everyone can be in sync with their work times!',
      confirmContent: 'Got It!',
      
    },
    hasReadIntro: false,
  }

  setCookie = (cookieName, cookieValue, expirationDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expirationDays*24*60*60*1000));
    const expires = "expires="+ date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    this.setState({hasReadIntro: true});
  }

  getCookie = cookieName => {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookie.split(';');

    for(let i = 0; i <cookiesArray.length; i++) {
      let selectedCookie = cookiesArray[i];
      while (selectedCookie.charAt(0) == ' ') {
        selectedCookie = selectedCookie.substring(1);
      }
      if (selectedCookie.indexOf(name) == 0) {
        return selectedCookie.substring(name.length, selectedCookie.length);
      }
    }
    return "";
  }

  checkCookie = () => {
    const userHasReadIntro = this.getCookie("readintro");
    console.log(userHasReadIntro);
    if (userHasReadIntro !== "" && userHasReadIntro !== "false") {
      this.setState({hasReadIntro: true});
    } else {
      this.setCookie("readintro", false, 365);
      this.setState({hasReadIntro: false});
    }
  }

  confirm = () => {
    this.setCookie("readintro", "true", 365);
  }

  componentDidMount() {
    this.checkCookie();
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render() {

    const cookieBannerStyles = {
      banner: {  
        textAlign: 'start', 
        backgroundColor: 'rgba(45, 39, 39, 0.33)', 
        width: '60%',
        height: '100%',
        bottom: '0',
        right: '0',
        fontSize: '0.8em',
        left: '0',
        padding: '5px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: '2px',
        margin: '0 auto'
        },
      message: { 
        fontWeight: 200,
        lineHeight: 'normal',
        display:'inline-flex',
        margin: '0px 5px',
        width: '80%'
       },
      button: {
        fontSize: '10px', 
        padding: '0px 6px',
        position: 'relative',
        top: '0',
        right: '0',
        margin: '0px 5px',
        display: 'flex',

        }
    };

    let showIntro;
    if (this.state.hasReadIntro !== true) {
      showIntro = (
        <MessageCard
          headerContent={this.state.howThisWorks.header}
          bodyContent={this.state.howThisWorks.body}
          confirmContent={this.state.howThisWorks.confirmContent}
          confirm={this.confirm}
          hasReadIntro={this.state.hasReadIntro}
        />
        )
    } else {
      showIntro = null;
    }

    return (
    <div className="appPage" id="appPage">
      {showIntro}
      <TimeclockCard />
      <MessageBoard />
      <CookieBanner
      styles={cookieBannerStyles}
      message="By using this site you agree to the use of cookies for analytics, personalized content and ads."
      onAccept={() => {}}
      dismissOnScroll={false}
      cookie="user-has-accepted-cookies" />
    </div>
    )
  }
}

export default App;
