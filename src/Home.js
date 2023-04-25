import './Home.css';
import Theme from "./Theme";

function Home() {
    return (
        <div className="home">
            <ul className="themes">
                <Theme/>
            </ul>
        </div>
    );
}

export default Home;