import axios from "axios"
import React, { useEffect, useState } from "react"
import { BASE_URL, axiosConfig } from "../../consts"

const CardProfile = () => {
    const [profile, setProfile] = useState({})

    useEffect(() => { getProfile() }, [])

    const getProfile = () => {
        axios
            .get(`${BASE_URL}/person`)
            .then((res) => { setProfile(res.data.profile) })
            .catch((err) => { alert('Ops... Algo deu errado') })
    }


    const choosePerson = (boleano) => {
        const body = {
            id: profile.id,
            choice: boleano
        }
        axios
            .post(`${BASE_URL}/choose-person`, body, axiosConfig)
            .then((res) => { getProfile() })
            .catch((err) => { alert('Ops... Algo deu errado') })
    }

    return (
        <div>
            <img src={profile.photo} alt={profile.photo_alt}/>
            <div>
                <h3>{`${profile.name},`}</h3>
                <h3>{`${profile.age}.`}</h3>
            </div>
            <div>
                <h4>{profile.bio}</h4>
            </div>

            <div>
                <button onClick={() => choosePerson(false)}>X</button>
                <button onClick={() => choosePerson(false)}>❤</button>
            </div>
        </div>
    )
}

export default CardProfile