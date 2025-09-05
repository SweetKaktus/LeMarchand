function ItemRow({item, hiddenCats, search}) {
    
    const { nom, prix, rarete, stock, category } = item

    // Si search est vide => je ne cherche pas à cacher
    // Si search est rempli, je n'affiche que si la recherche est inclue dans le nom

    let isHidden = false
    if (hiddenCats.includes(category)) {
        isHidden = true
    } else {
        if (!search || (nom.includes(search))) {
            isHidden = false
        } else {
            isHidden = true
        }
    }

    const markEmpty = !stock ? {color: "red"} : {}
    const myStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <tr hidden={isHidden} >
            <th style={{...markEmpty}} >{nom}</th>
            <td>{prix}</td>
            <td>{rarete}</td>
            <td>{stock ? stock : "En rupture !"}</td>
        </tr>
    )
}

export default ItemRow