import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfile';
import profile from './assets/profile.png';

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({
      displayBio: !this.state.displayBio,
    });
  };
  render() {
    const bio = this.state.displayBio ? (
      <div>
        <p>I live in Accra and code only on weekdays</p>
        <p>
          My favoirite language is javacript and i think react is quite
          interesting
        </p>
        <p>Besides coding i read and i love chicken wings and pizzas!</p>
        <button onClick={this.toggleDisplayBio}>Show less</button>
      </div>
    ) : (
      <div>
        <button onClick={this.toggleDisplayBio}>Read more</button>
      </div>
    );

    return (
      <div>
        <img src={profile} alt="profile" className="profile" />
        <h1>Hello!</h1>
        <p>Hello my name is Reynold. I am a software engineer.</p>
        <p>
          I am always looking forward to working on new technologies and
          projects
        </p>
        {bio}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
