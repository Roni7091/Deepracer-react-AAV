import React, { useState } from 'react';
import grp from '../components/group.module.css';
import { Link } from 'react-router-dom';

const Group = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handlePopupToggle = () => {
        setIsPopupOpen(!isPopupOpen);
      };

  return (
    <div>
      <title>Document</title>
      <div className={grp.v6_323}>
        <div className={grp.v6_423} />
        <div className={grp.v6_1623} />
        <div className={grp.v6_1723} />
        <span className={grp.v6_1723a}>Mark</span>
        <span className={grp.v6_1723b}>Icons</span>
        <span className={grp.v6_1723c}>Current Position</span>
        <span className={grp.v6_1723d}>Name</span>
        <span className={grp.v6_1723e}>Teams</span>
        <span className={grp.v6_1723f}>Pts</span>
        <div className={grp.v6_1923} />
          
        <div className={`grp.v6_6323popup ${isPopupOpen ? "open" : ""}`} onClick={handlePopupToggle}>
        <div className={grp.v6_6323} />
        <div className={grp.v6_2023} />
        <span className={grp.v6_2123}>Rowena Yeo</span>
        <span className={grp.v6_2123a}>NA</span>
        <span className={grp.v6_2123b}>LATAM</span>
        <span className={grp.v6_2123c}>EMEA</span>
        <span className={grp.v6_2123d}>ASPAC</span>
        <span className={grp.v6_2123e}>13</span>
        <span className={grp.v6_2123f}>07</span>
        <span className={grp.v6_2123g}>08</span>
        <span className={grp.v6_2123h}>07</span>
        <span className={grp.v6_2123i}>Sub Teams</span>
        <span className={grp.v6_2123j}>Sub Teams</span>
        <span className={grp.v6_2123k}>Sub Teams</span>
        <span className={grp.v6_2123l}>Sub Teams</span>
        <span className={grp.v6_2223}>01</span>
        <span className={grp.v6_2423}>234</span>
        </div>
        <span className={grp.v6_2523}>Larry Homes</span>
        <span className={grp.v6_2523a}>NA</span>
        <span className={grp.v6_2523b}>LATAM</span>
        <span className={grp.v6_2523c}>EMEA</span>
        <span className={grp.v6_2523d}>ASPAC</span>
        <span className={grp.v6_2523e}>13</span>
        <span className={grp.v6_2523f}>07</span>
        <span className={grp.v6_2523g}>08</span>
        <span className={grp.v6_2523h}>07</span>
        <span className={grp.v6_2523i}>Sub Teams</span>
        <span className={grp.v6_2523j}>Sub Teams</span>
        <span className={grp.v6_2523k}>Sub Teams</span>
        <span className={grp.v6_2523l}>Sub Teams</span>
        <span className={grp.v6_2623}>02</span>
        <span className={grp.v6_2723}>210</span>
        <div className={grp.v6_2823} />
        <span className={grp.v6_2923}>Jeff Srour &amp; Claudia Herben</span>
        <span className={grp.v6_2923a}>NA</span>
        <span className={grp.v6_2923b}>LATAM</span>
        <span className={grp.v6_2923c}>EMEA</span>
        <span className={grp.v6_2923d}>ASPAC</span>
        <span className={grp.v6_2923e}>13</span>
        <span className={grp.v6_2923f}>07</span>
        <span className={grp.v6_2923g}>08</span>
        <span className={grp.v6_2923h}>07</span>
        <span className={grp.v6_2923i}>Sub Teams</span>
        <span className={grp.v6_2923j}>Sub Teams</span>
        <span className={grp.v6_2923k}>Sub Teams</span>
        <span className={grp.v6_2923l}>Sub Teams</span>
        <span className={grp.v6_3023}>03</span>
        <span className={grp.v6_3123}>203</span>
        <div className={grp.v6_3223} />
        <span className={grp.v6_3323}>Gary Harbison</span>
        <span className={grp.v6_3323a}>NA</span>
        <span className={grp.v6_3323b}>LATAM</span>
        <span className={grp.v6_3323c}>EMEA</span>
        <span className={grp.v6_3323d}>ASPAC</span>
        <span className={grp.v6_3323e}>13</span>
        <span className={grp.v6_3323f}>07</span>
        <span className={grp.v6_3323g}>08</span>
        <span className={grp.v6_3323h}>07</span>
        <span className={grp.v6_3323i}>Sub Teams</span>
        <span className={grp.v6_3323j}>Sub Teams</span>
        <span className={grp.v6_3323k}>Sub Teams</span>
        <span className={grp.v6_3323l}>Sub Teams</span>
        <span className={grp.v6_3423}>04</span>
        <span className={grp.v6_3523}>194</span>
        <div className={grp.v6_3623} />
        <span className={grp.v6_3723}>Tom Weck</span>
        <span className={grp.v6_3723a}>NA</span>
        <span className={grp.v6_3723b}>LATAM</span>
        <span className={grp.v6_3723c}>EMEA</span>
        <span className={grp.v6_3723d}>ASPAC</span>
        <span className={grp.v6_3723e}>13</span>
        <span className={grp.v6_3723f}>07</span>
        <span className={grp.v6_3723g}>08</span>
        <span className={grp.v6_3723h}>07</span>
        <span className={grp.v6_3723i}>Sub Teams</span>
        <span className={grp.v6_3723j}>Sub Teams</span>
        <span className={grp.v6_3723k}>Sub Teams</span>
        <span className={grp.v6_3723l}>Sub Teams</span>
        <span className={grp.v6_3823}>05</span>
        <span className={grp.v6_3923}>176</span>
        <div className={grp.v6_4023} />
        <span className={grp.v6_4123}>Joyce Lee</span>
        <span className={grp.v6_4123a}>NA</span>
        <span className={grp.v6_4123b}>LATAM</span>
        <span className={grp.v6_4123c}>EMEA</span>
        <span className={grp.v6_4123d}>ASPAC</span>
        <span className={grp.v6_4123e}>13</span>
        <span className={grp.v6_4123f}>07</span>
        <span className={grp.v6_4123g}>08</span>
        <span className={grp.v6_4123h}>07</span>
        <span className={grp.v6_4123i}>Sub Teams</span>
        <span className={grp.v6_4123j}>Sub Teams</span>
        <span className={grp.v6_4123k}>Sub Teams</span>
        <span className={grp.v6_4123l}>Sub Teams</span>
        <span className={grp.v6_4223}>06</span>
        <span className={grp.v6_4323}>158</span>
        <div className={grp.v6_4423} />
        <div className={grp.v6_4523} />
        <div className={grp.v6_4623} />
        <div className={grp.v6_4723} />
        <div className={grp.v6_4823} />
        <div className={grp.v6_4923} />
        <div className={grp.v6_5023} />
        <div className={grp.v6_5123} />
        {/* <div className={grp.v6_6123}>
          <div className={grp.v6_6323} />
        </div> */}
        <Link to="/fourth"><span className={grp.v6_6523}>Final Race</span></Link>
        <Link to="/leader"><span className={grp.v6_6623}>Leader boards</span></Link>
        <Link to="/aboutpage"><span className={grp.v6_6723}>About</span></Link>
        <Link to="/contactpage"><span className={grp.v6_6823}>Contact</span></Link>
        <div className={grp.v6_1023}>
        <Link to="/loginpage"><span className={grp.v6_1123}>Sign in</span></Link>
          <div className={grp.v6_1223} />
        </div>
        <div className={grp.v6_1323}>
          <div className={grp.v6_1423} />
          <div className={grp.v6_1523} />
        </div>
        <Link to="/"><div className={grp.v6_7023} /></Link>
        <div className={grp.v6_7223}>
          <div className={grp.v6_7423} />
        </div>
        <div className={grp.v6_7623}>
          <div className={grp.v6_7723} />
          <div className={grp.v6_7823} />
        </div>
        <div className={grp.v6_7923}>
          <div className={grp.v6_8123} />
        </div>
        <div className={grp.v6_8223}>
          <div className={grp.v6_8323} />
        </div>
        <div className={grp.v6_8423}>
          <div className={grp.v6_8623} />
        </div>
        <div className={grp.v6_8723} />
        {/* Popup Box */}
    {isPopupOpen && (
        <div className={grp.popup}>
        <div>
        <img className={grp.popupimgname} src='rowena 2.png' alt='name' />
        <img className={grp.popupimg} src='popup.png' alt="Popup" />
        <img className={grp.popupimg2} src='pphush 1.png' alt='' />
        <img className={grp.popupimg3} src='tracks.png' alt='' />
        <h4 className={grp.popuptext1}>Chief Technology Officer & Global Vice President</h4>
        <p className={grp.popuptext2}>Responsible for overseeing the global technology services organization, delivering global infrastructure, application support, application development and technology services</p>
        <p className={grp.popuptext3}>New Jersey, <span className={grp.popuptext3a}>USA</span></p>
        </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Group;
