import { parseQuery } from 'app'
import {
    DateTime,
    DialogForm,
    Hidden,
    LongText,
} from 'form'
import { ContactsPersonField } from 'contacts'
import ReviewField from '../review/field'

const inputs = () => {
    const { review } = parseQuery()

    return <>
        {
            review
            ?
            <Hidden
                property='review'
                value={review}
            />
            :
            <ReviewField required />
        }
        <ContactsPersonField
            placeholder='person'
            property='person'
            required
        />
        <LongText
            placeholder='reason'
            property='reason'
            required
        />
        <DateTime
            placeholder='resolvedDate'
            property='resolvedDate'
        />
        <LongText
            placeholder='resolution'
            property='resolution'
        />
    </>
}

export default <DialogForm inputs={inputs} />
