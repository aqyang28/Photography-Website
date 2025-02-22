import React from 'react';
import './About.css';
import myPicture from '../images/aboutPic.jpg';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-header">About</h1>
      <div className="about-content">
        <div className="about-image">
          <img src={myPicture} alt="Alex Yang" />
        </div>
        <div className="about-text">

        <p>
        Hi! My name is Alex, and I am a photographer situated in the Cary, NC area. 
        I started "taking photography seriously" when my brother made the fatal mistake of letting me borrow his 
        Fujifilm X-T30 II when we were exploring the Grand Canyon during golden hour. 
        By the end of our trip, his camera became my camera (I'll pay you back eventually bro, promise) 
        and I had unlocked a new hobby. 
        </p>
        <p>
        Photography, like many other art forms, allows for so much creative liberty. 
        Taking pictures is so freeing to me, and it's a big reason why I love it so much. 
        I really enjoy working with other people, and portrait photography is built for that. 
        Pursuing photography has led me to so many amazing people and meaningful connections. 
        I am incredibly grateful for everyone I've met and all the support I've received along the way.
        </p>
        <p>
        Thank you for taking the time to stop by my profile, I hope you resonated with some of the stories 
        my photos were telling. If you would like to work together or have any feedback for me, 
        don't hesitate to reach send me a message on Instagram or send me an email at <span class="italic">aqyang.photography@gmail.com</span>! 
        </p>
      </div>
    </div>
    </div>
  );
}

export default About;