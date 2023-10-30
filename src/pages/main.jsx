import '../styles/main.css'

const Main = () => {
    return (
        <>
            <form className="textBox" method="get">
                <input type="text" className="text1" 
                placeholder="English please." />
                <button className="gen">Generate
                </button>
            </form>

            <div className="outPut">
                <button className="out"
                a href=""
                target="_blank"
                rel="noopener noreferrer">Show me</button>
            </div>


        </>
    )
}

export default Main;