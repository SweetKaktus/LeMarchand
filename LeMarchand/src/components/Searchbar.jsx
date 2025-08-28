function Searchbar(search, onSearch) {
    return(
        <>
            <input type="search" name="searchbar" id="searchbar" value={search} onChange={(e) => onSearch(e.target.value)} placeholder="Rechercher..."/>
        </>
    )
}

export default Searchbar