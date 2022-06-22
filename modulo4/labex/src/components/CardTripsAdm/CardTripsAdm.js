import React from "react"

const CardTripsAdm = (props) => {
    return(
        <div>
            <h3>{props.trip.name}</h3>
            <p>{props.trip.description}</p>
            <h4>{props.trip.planet}</h4>
            <p>{props.trip.date}</p>

            <button>delete</button>
            <button 
            onClick={() => {props.getTripDetail(props.trip.id)}}
            >
            detalhes
            </button>
            <hr />
        </div>
    )
}

export default CardTripsAdm