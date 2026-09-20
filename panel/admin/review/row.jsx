import { BooleanProperty } from 'list'
import { Item } from 'registry'

export default item => <>
    <td>
        <Item item={item.item} />
    </td>
    <td>
        <Item item={item.person} />
    </td>
    <td>{item.title}</td>
    <td className='content'>{item.content}</td>
    <BooleanProperty value={item.hasUsedPersonally} />
    <BooleanProperty
        nullable
        value={item.recommended}
    />
</>
