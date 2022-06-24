import React, { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../consts"

const MatchList = () => {
    const [matchs, setMatchs] = useState([])

    useEffect(() => { getMetchs() }, [])

    const getMetchs = () => {
        axios
            .get(`${BASE_URL}/matches`)
            .then((res) => {
                setMatchs(res.data.matches)
            })
            .catch((err) => { alert('Ops... Algo deu errado') })
    }

    const renderMatchs = matchs.map((match) => {
        return (
            <div>
                <p>foto de perfil</p>
                <h4>{match.name}</h4>
            </div>
        )
    })
    return (
        <div>
            {renderMatchs}
        </div>
    )
}

export default MatchList