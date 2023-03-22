import '../styles/HamBurger.scss';
import { AiFillSetting, AiFillLock, AiFillHome } from 'react-icons/ai';
import { BiChevronDown, BiTimeFive } from 'react-icons/bi';
import { IoIosFlask } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';
import { BsFillShieldFill } from 'react-icons/bs';
import { FiMessageSquare } from 'react-icons/fi';
import HamBurgerItem from './HamBurgerItem';

export default function HamBurger() {
  return (
    <div className="hamburger">
      <HamBurgerItem icon={<AiFillSetting />} text="Setting" endIcon={<BiChevronDown />} />
      <HamBurgerItem icon={<AiFillLock />} text="Safe Search" endText="Moderate" />
      <HamBurgerItem icon={<IoIosFlask />} text="Lab" endIcon={<BiChevronDown />} />
      <HamBurgerItem icon={<BiTimeFive />} text="Search History" />
      <HamBurgerItem icon={<RxAvatar />} text="My Bing" />
      <HamBurgerItem icon={<BsFillShieldFill />} text="Privacy" />
      <HamBurgerItem icon={<FiMessageSquare />} text="Feeback" />
      <HamBurgerItem
        icon={<AiFillHome />}
        text="Customize your homepage"
        endIcon={<BiChevronDown />}
      />
    </div>
  );
}
