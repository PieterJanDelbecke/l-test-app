import { useEffect } from "react"

// import axios from "../api/axios"
import api from "../api/api"

const Home = () => {

    useEffect( () => {
        async function fetchData() {
            const data = await api.getFilm()
            if (data){
                console.log("Data:", data)
            }
        }
        fetchData()
    }, [])

    return (
        <h1>Home Page - CRA</h1>
    )
}

export default Home