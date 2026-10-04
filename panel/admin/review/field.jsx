import { Browse } from 'form'
import filters from './filters'
import headers from './headers'
import row from './row'

export default props => <Browse
    filters={filters}
    headers={headers}
    review
    row={row}
    {...props}
/>
