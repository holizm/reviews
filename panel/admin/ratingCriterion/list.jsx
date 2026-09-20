import {
    List,
    Title,
} from 'list'
import card from './card'
import Form from './form'
import headers from './headers'
import row from './row'

export default <List
    card={card}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
    upsert={Form}
/>
