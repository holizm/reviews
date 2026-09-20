import { Browse } from 'form'
import headers from './headers'
import row from './row'

export default props => <Browse
    choose={item => item.id}
    headers={headers}
    placeholder='reviewsRatingCriterion'
    property='ratingCriterion'
    row={row}
    {...props}
/>
