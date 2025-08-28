function FilterOptionBox({isChecked, onCheck, ...item}) {
    const {category} = item
    const idCat = "chkbx"+{category}
    return (
        <>
            <input type="checkbox" name={idCat} id={idCat} checked={isChecked} onChange={(e) => onCheck(e.target.checked)} />
            <label htmlFor={idCat}>Show {idCat}</label>
        </>
    )
}


export default FilterOptionBox