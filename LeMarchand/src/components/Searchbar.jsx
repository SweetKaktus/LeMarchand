function Searchbar({search, setSearch}) {
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return(
        <>
            <input type="text" name="searchbar" id="searchbar" value={search} onChange={handleChange} placeholder="Rechercher..."/>
        </>
    )
}

export default Searchbar