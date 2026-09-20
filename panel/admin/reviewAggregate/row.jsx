import { Item } from 'registry'

export default item => <>
    <td>
        <Item item={item.item} />
    </td>
    <td>{item.reviewCount}</td>
    <td>{item.ratingCount}</td>
    <td>{item.averageScore}</td>
    <td>{item.recommendedCount}</td>
</>
