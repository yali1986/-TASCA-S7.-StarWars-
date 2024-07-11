import { createContext, useEffect, useState } from 'react'

export const Context = createContext()

export const GlobalProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [hasMore, setHasMore] = useState(true)

    const fetchData = async (page) => {
        setLoading(true)
        try {
            const res = await fetch(`https://swapi.dev/api/starships/?page=${page}`)
            if (!res.ok) {
                if (res.status === 404) {
                    setHasMore(false)
                    return 
                }
                throw new Error(`Error fetching data: ${res.status}`)
            }
            const result = await res.json()
            setData(prevData => {
                const newData = result.results.filter(item => !prevData.some(existingItem => existingItem.url === item.url))
                return [...prevData, ...newData]
            });
        } catch (error) {
            if (error.message !== 'Error fetching data: 404') { 
                setError(error.message)
            }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (hasMore) {
            fetchData(page)
        }
    }, [page])

    const loadMore = () => {
        if (hasMore && !loading) {
            setPage(prevPage => prevPage + 1)
        }
    }

    return (
        <Context.Provider value={{ data, error, loadMore, loading }}>
            {children}
        </Context.Provider>
    )
}