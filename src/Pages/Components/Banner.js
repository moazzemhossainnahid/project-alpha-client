import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://mobisoftinfotech.com/resources/wp-content/uploads/2018/08/Banner.png")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
      <h1 className="mb-5 text-5xl font-bold">A WEBBASED EMERGENCY HOUSEHOLD SERVICE PLATFORMe</h1>
      <p className="mb-5">Anyone can easily get and hire worker. Workers like "Electricians, Cookers, Babysitter, Plumbers, House cleaner, Carpenter, Maidservant etc. Anyone can easily pay the bill through Online or in cash. </p>
      <h1 className="mb-5 text-5xl font-bold text-black-600">Want to hire?</h1>
      <button className="btn btn-primary">Services</button>
    </div>
  </div>
</div>
    );
};

export default Banner;