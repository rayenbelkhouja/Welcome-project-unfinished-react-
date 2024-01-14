import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import './Home.css'

export default function Home() {
    return (
        <>
        <Topbar />
        <Leftbar />
        <div className="home">
            <Feed />
            <Rightbar />
        </div>
        </>
        
    )
}
