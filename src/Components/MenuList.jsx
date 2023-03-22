import '../styles/MenuList.scss';

export default function MenuList({ visible }) {
  return (
    <div
      className="menu-list"
      onMouseEnter={() => visible(true)}
      onMouseLeave={() => visible(false)}
    >
      <p>Translate</p>
      <p>Menu1</p>
      <p>News</p>
      <p>Travel</p>
      <p>MSN</p>
      <p>Start.gg</p>
      <p>Take Lessons</p>
      <p>Health</p>
      <p>Office</p>
    </div>
  );
}
