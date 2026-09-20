import { ContactsPersonFilter } from 'contacts'
import {
    Boolean,
    Search,
} from 'list'

export default <>
    <Search />
    <ContactsPersonFilter property='person' />
    <Boolean
        label='reviewsHasUsedPersonally'
        nullable
        property='hasUsedPersonally'
    />
    <Boolean
        label='reviewsRecommended'
        nullable
        property='recommended'
    />
</>
