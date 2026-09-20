import { List } from 'list'
import card from './card'
import filters from './filters'
import Form from './form'
import headers from './headers'
import row from './row'

export default <List
    card={card}
    filters={filters}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
    upsert={Form}
/>
