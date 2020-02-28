import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
  render() {
    const { image, link } = this.props.SocialProfile;
    return (
      <div style={{ display: 'inline-block', margin: 10 }}>
        <a href={link}>
          <img
            src={image}
            style={{ width: 35, height: 35 }}
            alt="socialImages"
          />
        </a>
      </div>
    );
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h2>Social Media Profiles</h2>
        <div style={{}}>
          {SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
            return (
              <SocialProfile
                key={SOCIAL_PROFILE.id}
                SocialProfile={SOCIAL_PROFILE}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default SocialProfiles;
