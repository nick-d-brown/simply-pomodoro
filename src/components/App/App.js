import React from 'react';
import './App.scss';
import MessageCard from './../SupportingComponents/MessageCard/MessageCard';

class App extends React.Component {

  state = {
    howThisWorks: {
      header: 'How does this work?!',
      body: 'This app is meant to be a continuous pomodoro timer. It is running 24/7 at 25 minute work segments and 5 minute rest segments. This way everyone can be in sync with their work times!'
    }
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
    <div className="appPage" id="appPage">
      <MessageCard
        headerContent={this.state.howThisWorks.header}
        bodyContent={this.state.howThisWorks.body}
      />
    </div>
    )
  }
}

export default App;
