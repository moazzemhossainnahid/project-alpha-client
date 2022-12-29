import React from 'react';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1234</p>
        <p className="p__opensans">+1 212-355-1234</p>
      </div>

      <div className="app__footer-links_logo">
        {/* <img className='w-full mx-auto' src={Logo} alt="footer_logo" /> */}
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        {/* <img src={Spoon} className="spoon__img mx-auto " style={{ marginTop: 15 }} alt="" /> */}
        <div className="app__footer-links_icons flex mx-auto w-full justify-center">
      </div>    

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">09:00 am - 08:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 am - 07:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright pb-3">
      <p className="p__opensans">{new Date().getFullYear()} Khadok. All Rights Reserved.</p>
    </div>

  </div>
  </div>
);

export default Footer;
