import { createContext, useEffect, useState } from 'react'

export const Context = createContext()


export const GlobalProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("https://swapi.py4e.com/api/starships/")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                return res.json()
            })
            .then((data) => setData(data.results))
            .catch((error) => setError(error.message))
    }, [])

    return (
        <Context.Provider value={{ data, error }}>
            {children}
        </Context.Provider>
    )
}

