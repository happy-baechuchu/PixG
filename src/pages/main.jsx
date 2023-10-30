import '../styles/main.css';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <form className="textBox" action="" method="get">
                Prompt :
                <input type="textarea" className="text1" 
                placeholder="English please." />
                <button className="gen">Create
                </button>
            </form>

            <div className="outPut">
                <Link to="/output">
                <button className="out">Show me</button>
                </Link>
            </div>


        </>
    )
}

export default Main;