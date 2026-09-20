import { Item } from 'registry'

export default item => <>
    <td>
        <Item item={item.review} />
    </td>
    <td>
        <Item item={item.ratingCriterion} />
    </td>
    <td>{item.score}</td>
</>
