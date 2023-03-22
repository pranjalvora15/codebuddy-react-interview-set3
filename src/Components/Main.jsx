import '../styles/Main.scss';
import Carousel from './Carousel';
import SearchBox from './SearchBox';

export default function Main() {
  return (
    <div className="main">
      <SearchBox />
      <Carousel />
    </div>
  );
}
