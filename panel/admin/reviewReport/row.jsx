import { DateTime } from 'list'
import { Item } from 'registry'

export default item => <>
    <td>
        <Item item={item.review} />
    </td>
    <td>
        <Item item={item.person} />
    </td>
    <td>{item.reason}</td>
    <td>
        <DateTime date={item.resolvedDate} />
    </td>
    <td>{item.resolution}</td>
</>
