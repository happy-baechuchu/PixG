import "../styles/main.css";
import React, { useState } from "react"; // Import useState
import { Link } from "react-router-dom";

const Main = () => {
const [showSmile, setShowSmile] = useState(false);

  // Event handler for the Create button
const handleCreateClick = () => {
    setShowSmile(true);
};

return (
    <>
    <form className="choice" action="#" method="get">
        <label> Choice : </label>
        <select name="chanuilChoice">
        <option value="cha">character</option>
        <option value="buil">building</option>
        </select>
    </form>
    <form className="textBox" action="#" method="get">
        Prompt :
        <input
        type="textarea"
        className="text1"
        placeholder="English please."
        />
        <button className="gen" onClick={handleCreateClick}>
        Create
        </button>
    </form>

    {showSmile && (
        <div className="smile">
        <img src="././public/pixel.png" alt="" />
        </div>
    )}

    <div className="outPut">
        <Link to="/output">
        <button className="out">Show me</button>
        </Link>
    </div>
    </>
);
};

export default Main;
