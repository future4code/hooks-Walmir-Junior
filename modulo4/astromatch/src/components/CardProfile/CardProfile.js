import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CardProfile = () => {
    const getProfileUrl = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/walmir/person`

    const [profile, setProfile] = useState([])

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        axios
            .get(getProfileUrl)
            .then((res) => {
                setProfile(res.data.profile)
                console.log(res.data.profile)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const renderProfile = profile.map((person) => {
        return (
            <div>
                <div>
                    header
                </div>
                <div>
                    <img src={person.photo} alt={person.photo_alt}/>
                </div>
                <div>
                    footer
                </div>
            </div>
        )
    })
    return (
        <>
           {renderProfile}
        </>
    )
}

export default CardProfile