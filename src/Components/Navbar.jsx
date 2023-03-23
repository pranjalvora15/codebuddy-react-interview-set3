import { useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { AiFillTrophy } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import MenuList from './MenuList';
import '../styles/Navbar.scss';
import HamBurger from './HamBurger';

export default function Navbar() {
  const [flag, setFlag] = useState(false);
  const [hamburgerFlag, setHamburgerFlag] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__section1">
        <div className="company">
          <div className="logo">
            <div className="logo__box"> </div>
            <div className="logo__box"> </div>
            <div className="logo__box"> </div>
            <div className="logo__box"> </div>
          </div>
          <h4>Microsoft Bing</h4>
        </div>
        <div className="navbar__list">
          <p>Chat</p>
          <p>Images</p>
          <p>Videos</p>
          <p>Maps</p>
          <div className="menu">
            <p onMouseEnter={() => setFlag(true)} onMouseLeave={() => setFlag(false)}>
              ...
            </p>
            {flag && <MenuList visible={setFlag} />}
          </div>
        </div>
      </div>
      <div className="navbar__section2">
        <div>Sign In</div>
        <RxAvatar />
        <div>Rewards</div>
        <AiFillTrophy />
        <div className="hambuger">
          <GiHamburgerMenu onClick={() => setHamburgerFlag(!hamburgerFlag)} />
          {hamburgerFlag && <HamBurger />}
        </div>
      </div>
    </div>
  );
}
