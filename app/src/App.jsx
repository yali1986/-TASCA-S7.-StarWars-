import { useState,useEffect } from 'react'
import { GlobalProvider } from './context/GlobalState'
import './App.css'
import Header from './components/Header'


function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
fetch("https://swapi.py4e.com/api/starships/")
.then((res) => {
  if(!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }  
  return res.json()
  })
.then((data) => setData(data.results))
.catch((error) => setError(error.message))
}, [])


  return (
    <GlobalProvider>
    <Header/>
       <div className='container-fluid'>
{error && <p>Error: {error}</p>}
       <ul>
        {data?.map((item) => (<li key={item.name} className='card w-75 mx-auto ps-3 pb-0 pt-3 m-3 bg-dark bg-gradient text-secondary'>
        <div className='my-auto'>
        <h6>{item.name.toUpperCase()}</h6>
        <p>{item.model}</p>
        </div>
       </li>))}
       </ul>

       </div>
    </GlobalProvider>
   
  )
}

export default App
