import SinglePost from "../components/SinglePost";
import Sidebar from "../components/SideBar";

export default function PostPage() {
    return (
        <div className="postPage">
            <SinglePost />
            <Sidebar />
        </div>
    )
}