import Banner from '../components/Banner';
import SideBar from '../components/SideBar';

export default function HomePage() {
  return (
    <div className="homepage">
      <Banner />
      <div className="homepage__body">
        <div className="homepage__posts">
          posts
        </div>
        <SideBar />
      </div>
    </div>
  );
}
