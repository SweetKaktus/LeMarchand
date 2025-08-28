function ItemRow({item}) {
    
    const { nom, prix, rarete, stock } = item

    return (
        <tr>
            <th>{nom}</th>
            <td>{prix}</td>
            <td>{rarete}</td>
            <td>{stock}</td>
        </tr>
    )
}

export default ItemRow