import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {
  const { image, link } = props.SocialProfile;
  return (
    <div style={{ display: 'inline-block', margin: 10 }}>
      <a href={link}>
        <img src={image} style={{ width: 35, height: 35 }} alt="socialImages" />
      </a>
    </div>
  );
};

const SocialProfiles = () => (
  <div>
    <h2>Social Media Profiles</h2>
    <div style={{}}>
      {SOCIAL_PROFILES.map(SOCIAL_PROFILE => (
        <SocialProfile key={SOCIAL_PROFILE.id} SocialProfile={SOCIAL_PROFILE} />
      ))}
    </div>
  </div>
);

export default SocialProfiles;
