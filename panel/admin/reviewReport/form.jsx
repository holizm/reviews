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
            placeholder='reviewsPerson'
            property='person'
            required
        />
        <LongText
            placeholder='reviewsReason'
            property='reason'
            required
        />
        <DateTime
            placeholder='reviewsResolvedDate'
            property='resolvedDate'
        />
        <LongText
            placeholder='reviewsResolution'
            property='resolution'
        />
    </>
}

export default <DialogForm inputs={inputs} />
