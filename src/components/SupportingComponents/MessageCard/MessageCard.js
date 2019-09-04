import React from 'react';
import './MessageCard.scss';


class MessageCard extends React.Component {

  // Determines what dom elements get rendered to the page
  render(){

    // Props 
    const headerContent = this.props.headerContent;
    const bodyContent = this.props.bodyContent;
    const confirmContent = this.props.confirmContent;

    // Inline Styles
    const style = {
      card: {
        width: '18rem'
      }
    }

    return (<div className="" id="MessageCard">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title header-font">{headerContent}</h5>
              <p className="card-text">{bodyContent}</p>
              <div className="btn btn-primary" onClick={this.props.confirm}>{confirmContent}</div>
            </div>
          </div>
        </div>
    )
  }
}

export default MessageCard;
