import { parseQuery } from 'app'
import {
    DialogForm,
    Hidden,
    LongText,
} from 'form'
import { ContactsPersonField } from 'contacts'
import ReviewField from '../review/field'
import ResponseField from './field'

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
        <ResponseField review={review} />
        <ContactsPersonField
            placeholder='reviewsPerson'
            property='person'
            required
        />
        <LongText
            placeholder='reviewsContent'
            property='content'
            required
        />
    </>
}

export default <DialogForm inputs={inputs} />
