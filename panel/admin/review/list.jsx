import {
    List,
    Text,
} from 'list'
import Form from './form'

const headers = <>
    <th start>reviewsItem</th>
    <th>reviewsPerson</th>
    <th>reviewsHasUsedPersonally</th>
</>

const row = item => <>
    <td>
        {
            item.item?.title
        }
    </td>
    <td>
        {
            item.person?.title
        }
    </td>
    <td>
        {
            item.hasUsedPersonally
        }
    </td>
</>

export default <List
    create={Form}
    filters={<Text property='content' />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
