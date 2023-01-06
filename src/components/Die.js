import React from "react"


function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391": "transparent",
        opacity: props.isHeld ? 0.5: 1
    }
    return (
        <div className="die-face" style={styles} onClick={props.holdDice}>
            { props.value === 1 && <i className="fa-solid fa-dice-one"></i> }
            { props.value === 2 && <i className="fa-solid fa-dice-two"></i> }
            { props.value === 3 && <i className="fa-solid fa-dice-three"></i> }
            { props.value === 4 && <i className="fa-solid fa-dice-four"></i> }
            { props.value === 5 && <i className="fa-solid fa-dice-five"></i> }
            { props.value === 6 && <i className="fa-solid fa-dice-six"></i> }
        </div>
    )
}

export default Die