function FilterOptionBox({category, hiddenCats, setHiddenCats}) {

    const handleChange = (e) => {
        if (e.target.checked) {
            setHiddenCats([...hiddenCats, category])
        } else {
            setHiddenCats(hiddenCats.filter(cat => cat !== category))
        }
    }

    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent:"start", alignItems:"center", padding: "1.3rem"}}>
            <input style={{margin:"1rem", padding:"1rem"}} onChange={handleChange} type="checkbox" name={category} id={category}/>
            <label htmlFor={category}>Cacher les {category}</label>
        </div>
    )
}

// Première option moins lisible pour mettre en place le filtre: 
// onChange={(e) => setHiddenCats(e.target.checked ? [...hiddenCats, category] : hiddenCats.filter((cat) => cat!==category ))}
export default FilterOptionBox