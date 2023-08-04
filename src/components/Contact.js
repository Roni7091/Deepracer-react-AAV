import React from 'react';
import cont from '../components/contact.module.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
  <div className={cont.v1_287}>
    <div className={cont.v1_387} />
    <Link to="/fourth"><span className={cont.v1_587}>Final Race</span></Link>
    <Link to="/"><div className={cont.v1_687} /></Link>
    
    <div className={cont.v1_1387}>
      <div className={cont.v1_1487} />
      <div className={cont.v1_1587} />
    </div>
    <div className={cont.v1_1687} />
    <Link to="/leader"><span className={cont.v1_1987}>Leader boards</span></Link>
    <Link to="/aboutpage"><span className={cont.v1_2087}>About</span></Link>
    <Link to="/secondnew"><span className={cont.v1_2287}>Groups</span></Link>
    <div className={cont.v1_1087}>
    <Link to="/loginpage"><span className={cont.v1_1187}>Sign in</span></Link>
      <div className={cont.v1_1287} />
    </div>
    <div className={cont.v1_2387} />
    <div className={cont.v1_2487} />
    <div className={cont.v1_2587} />
    <div className={cont.v1_2687} />
    <span className={cont.v1_2887}>Contact us</span>
    <span className={cont.v1_2987}>Ask a question from us</span>
    {/* <span className={cont.v1_3087}>Name</span> */}
    <input type='name' placeholder='Name' className={cont.v1_3187} />
    <input type='email' placeholder='Email' className={cont.v1_3287} />
    <input type='number' placeholder='Phone Number' className={cont.v1_3387} />
    <input type='text' placeholder='Your Message' className={cont.v1_3487} />
    {/* <span className={cont.v1_3587}>Email</span>
    <span className={cont.v1_3687}>Phone</span>
    <span className={cont.v1_3787}>Your Message</span> */}
    <div className={cont.v1_3887} />
    <button className={cont.v1_3987} />
    <span className={cont.v1_4087}>Send</span>
    <span className={cont.v1_4187}>Contact</span>
    <span className={cont.v1_4187a}>Information :</span>
    <span className={cont.v1_4287}>Reach</span>
    <span className={cont.v1_4287a}>out to</span>
    <span className={cont.v1_4387}>Raritan 56 New Jersey U.S.A</span>
    <span className={cont.v1_4487}>
      pitcrew@its.jnj.com
    </span>
  </div>

    </div>
  )
}

export default Contact