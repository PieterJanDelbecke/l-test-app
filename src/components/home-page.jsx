import { useEffect } from "react"

// import axios from "../api/axios"
import api from "../api/api"

const Home = () => {

    
    useEffect( () => {
        const arr = ['cinema', 'film']
        arr.forEach(theater => {
            async function fetchCinema() {
                const data = await api.getFilm(theater)
                if (data){
                    console.log(`Data ${theater}World: `, data)
                }
            }
            fetchCinema()
        })
    }, [])


    return (
        <h1>Home Page - CRA</h1>
    )
}

export default Home