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
                review
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
            reason
            required
        />
        <DateTime resolvedDate />
        <LongText resolution />
    </>
}

export default <DialogForm inputs={inputs} />
