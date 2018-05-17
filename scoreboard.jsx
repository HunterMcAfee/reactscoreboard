function Team(props) {
    return (
        <div className={`team ${props.teamName}`}>
            <div className="team-name">
                <h3>{props.teamName}</h3>
            </div>
            <div className="counter">
                {/* Red */}
                <button className="btn btn-danger">-</button>
                <div className="team-score">0</div>
                {/* Green Button */}
                <button className="btn btn-success">+</button>
            </div>
        </div>
    )
}

// React is a bunch of legos.  The legos are called components.
// A component is a fancy name for a class-like UI thing.
// A component is REGULAR JAVASCRIPT UNITL you get inside the return...
// the return... once inside, you are writing JSX
function Application() {
    console.log("Hello from console.");
    // Main is going to return a piece of JSX.  EVERY
    // React omcponent MUST return a single DOM element
    return (
        <div className="scoreboard">
            <div className="header">
                <h1>Celtics vs Cavs - Game 3</h1>
            </div>
            <div className="teams">
                <Team teamName={"Boston"} />
                <Team teamName={"Cleveland"} />
            </div>
        </div>
    )
}

// The render method (inside ReactDOM) takes 2 arguments:
// 1. What
// 2. Where
// React.createElement('h1', 'Sanity Check');
ReactDOM.render(
    // <h1>Sanity Check!</h1>,
    <Application />,
    document.getElementById('root')
);