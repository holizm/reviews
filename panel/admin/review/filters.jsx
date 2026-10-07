import { ContactsPersonFilter } from 'contacts'
import { Boolean } from 'list'

export default <>
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
