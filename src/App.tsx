import { useState } from 'react'
import './App.css'
import CardList from './Components/Cardlist/CardList'
import Search from './Components/Search/Search'
import { CompanySearch } from './company'
import { searchCompanies } from './api'

function App() {

  const [search, setSearch] = useState<string>("")
  const [searchReasult, setSearchReasult] = useState<CompanySearch[]>([])
  const [serverError, setServerError] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  // here
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const result = await searchCompanies(search)
    if (typeof result === 'string') {
      setServerError(result)
    } else if (Array.isArray(result.data)) {
      setSearchReasult(result.data)
    }
    console.log(searchReasult);


  }
  // added 2+2

  return (
    <div className='App'>
      <Search handleChange={handleChange} search={search} handleClick={handleClick} />
      {serverError && <h1> {serverError} </h1>}
      <CardList />
    </div>
  )
}

export default App
