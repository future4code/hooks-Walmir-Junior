import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const usePrivatePage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (!token){
            navigate('/Login')  
        }
    }, [navigate])
}

export default usePrivatePage