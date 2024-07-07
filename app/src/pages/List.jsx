import { useContext } from 'react'
import { Context } from '../context/GlobalState'
import StarshipList from '../components/StarshipList'


export default function List() {
    const { data, error } = useContext(Context)

    return (
        <div className='container-fluid'>
            {error && <p>Error: {error}</p>}
            <StarshipList starships={data} />
        </div>
    )
}