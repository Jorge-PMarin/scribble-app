import Banner from '../components/Banner';
import SideBar from '../components/SideBar';
import Post from '../components/Post';

export default function HomePage() {
  return (
    <div className="homepage">
      <Banner />
      <div className="homepage__body">
        <div className="homepage__posts">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <SideBar />
      </div>
    </div>
  );
}
