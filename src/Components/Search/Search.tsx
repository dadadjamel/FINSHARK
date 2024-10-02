

interface props {
    search : string,
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Search = ({handleClick,search,handleChange} : props) => {

   
    return (
        <div>
            <input value={search} onChange={(e)=>handleChange(e)} />
            <button onClick={e => handleClick(e)}> Search </button>
        </div>
    )
}

export default Search