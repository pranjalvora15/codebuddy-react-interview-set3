import '../styles/HamBurgerItem.scss';

export default function HamBurgerItem({ icon, text, endIcon, endText }) {
  return (
    <div className="hamburger-list">
      <div className="hamburger-list__name">
        {icon}
        <span>{text}</span>
      </div>
      <div>{endIcon || endText}</div>
    </div>
  );
}
