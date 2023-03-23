import '../styles/Main.scss';
import NewsContainer from './NewsContainer';
import SearchBox from './SearchBox';

export default function Main() {
  return (
    <div className="main">
      <SearchBox />
      <NewsContainer />
    </div>
  );
}
