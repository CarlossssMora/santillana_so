import React from 'react';

const SocialIcons = () => {
  return (
    <div className="flex gap-4 mt-4">
      <a href="#" className="hover:opacity-80">
        <img
          src="/img/icons-facebook.png"
          alt="Facebook"
          className="h-10 w-10"
        />
      </a>
      <a href="#" className="hover:opacity-80">
        <img
          src="/img/icons-instagram.png"
          alt="Instagram"
          className="h-10 w-10"
        />
      </a>
      <a href="#" className="hover:opacity-80">
        <img src="/img/icons-twitter.png" alt="Twitter" className="h-10 w-10" />
      </a>
      <a href="#" className="hover:opacity-80">
        <img
          src="/img/icons-linkedin.png"
          alt="LinkedIn"
          className="h-10 w-10"
        />
      </a>
    </div>
  );
};

export default SocialIcons;
