import {useState, useEffect} from 'react'
import axios from 'axios'

const useRequestData = (url) => {
    const [data, setData] = useState(undefined)

    useEffect(() => {
        axios
        .get(url)
        .then((res) => { setData(res.data.trips)})
        .catch((err) => {console.log(err)})
    }, [url])

    return data
}

export default useRequestData 