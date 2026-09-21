import { Browse } from 'form'
import headers from './browseHeaders'
import row from './browseRow'

export default ({ review }) => <Browse
    headers={headers}
    placeholder='coreParent'
    property='parent'
    query={{ review }}
    row={row}
/>
