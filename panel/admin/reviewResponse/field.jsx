import { Browse } from 'form'
import headers from './browseHeaders'
import row from './browseRow'

export default ({ review }) => <Browse
    headers={headers}
    parent
    query={{ review }}
    row={row}
/>
