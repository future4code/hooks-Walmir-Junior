import React from "react"

const CardTrips = (props) => {
    return(
        <div>
            <h3>{props.trip.name}</h3>
            <p>{props.trip.description}</p>
            <h4>{props.trip.planet}</h4>
            <p>{props.trip.date}</p>
            <hr />
        </div>
    )
}

export default CardTrips