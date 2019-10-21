import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

const SocialProfile = props => {
  const { link, image } = props.socialProfile;
  return (
    <span>
      <a href={link}>
        <img
          src={image}
          alt="social media"
          style={{ width: 35, height: 35, margin: 10 }}
        />
      </a>
    </span>
  );
};

const SocialProfiles = () => (
  <div>
    {SOCIAL_PROFILES.map(profile => {
      return <SocialProfile key={profile.id} socialProfile={profile} />;
    })}
  </div>
);

export default SocialProfiles;
