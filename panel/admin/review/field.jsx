import { Browse } from 'form'
import filters from './filters'
import headers from './headers'
import row from './row'

export default props => <Browse
    choose={item => item.id}
    filters={filters}
    headers={headers}
    placeholder='reviewsReview'
    property='review'
    row={row}
    {...props}
/>
