function ItemCategory({category, hiddenCats}) {
    
    return (
    <tr hidden={hiddenCats.includes(category)} >
        <th><strong>{ category }</strong></th>
    </tr>
    )
}


export default ItemCategory