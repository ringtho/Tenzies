import React from "react"


function Die(props) {
    return (
        <div className="die-faces" onClick={props.isHeld}>
            {props.value}
        </div>
    )
}

export default Die