import { Browse } from 'form'
import headers from './browseHeaders'
import row from './browseRow'

export default ({ review }) => <Browse
    choose={item => item.id}
    headers={headers}
    placeholder='coreParent'
    property='parent'
    query={{ review }}
    row={row}
/>
