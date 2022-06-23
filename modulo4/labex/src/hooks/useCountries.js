import { useState, useEffect } from "react";
import axios from "axios";

const useCountries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/jonasruth/61bde1fcf0893bd35eea/raw/10ce80ddeec6b893b514c3537985072bbe9bb265/paises-gentilicos-google-maps.json')
        .then((res) => {
            setCountries(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return countries
}

export default useCountries