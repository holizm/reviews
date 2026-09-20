import { Item } from 'registry'

export default item => <>
    <td>
        <Item item={item.review} />
    </td>
    <td>
        <Item item={item.parent} />
    </td>
    <td>
        <Item item={item.person} />
    </td>
    <td className='content'>{item.content}</td>
</>
