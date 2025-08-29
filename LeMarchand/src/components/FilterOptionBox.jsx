function FilterOptionBox({category}) {
    const idCat = "chkbx"+{category}
    
    
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent:"start", alignItems:"center", padding: "1.3rem"}}>
            <input style={{margin:"1rem", padding:"1rem"}}type="checkbox" name={category} id={category} />
            <label htmlFor={category}>Cacher les {category}</label>
        </div>
    )
}


export default FilterOptionBox