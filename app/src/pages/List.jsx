import { useContext } from 'react'
import { Context } from '../context/GlobalState'
import StarshipList from '../components/StarshipList'


export default function List() {
    const { data, error, loadMore, loading } = useContext(Context)

    return (
        <div className='container-fluid'>
            {error && <p>Error: {error}</p>}
            <StarshipList starships={data} loadMore={loadMore} loading={loading}/>
        </div>
    )
}