import React from 'react';
import Mailto from 'react-protected-mailto';
import './About.scss';
import nickProfile from "./../../images/profilepic.png";

function About() {
  return (
    <div id="aboutPage">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4 x-center-y-center">
            <img src={nickProfile} className="card-img" alt="..."/>
          </div>
          <div className="col-md-8 x-center-y-center">
            <div className="card-body">
              <p className="card-text">Hi I'm nick and welcome to my site! This started as a fun little project to help me with aligning my "focus" times with other co-workers.</p>
              <p className="card-text">In case you were curious, this project is open source! That means if you are a junior dev, college student, life-long learner, or just a bored senior dev you can help!</p>
              <p className="card-text">Feel free to contact me using email or github if you have any questions.</p>
              <p className="card-text">                
                Email: <Mailto
                  email='n.brown.professional@gmail.com'
                  headers={
                    {subject:'I found you on simplypomodoro.com!'}
                }/>
              </p>
              <p className="card-text">                
                github: <a href="https://github.com/nick-d-brown">github.com/nick-d-brown</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
