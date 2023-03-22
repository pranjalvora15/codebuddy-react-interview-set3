import '../styles/Home.scss';
import Main from './Main';
import Navbar from './Navbar';

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}
