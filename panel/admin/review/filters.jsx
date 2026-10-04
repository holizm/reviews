import { ContactsPersonFilter } from 'contacts'
import {
    Boolean,
    Search,
} from 'list'

export default <>
    <Search />
    <ContactsPersonFilter property='person' />
    <Boolean
        label='hasUsedPersonally'
        nullable
        property='hasUsedPersonally'
    />
    <Boolean
        label='recommended'
        nullable
        property='recommended'
    />
</>
