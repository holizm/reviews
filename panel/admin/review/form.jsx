import { parseQuery } from 'app'
import {
    Boolean,
    DialogForm,
    Hidden,
    LongText,
    Text,
    Title,
} from 'form'
import { ContactsPersonField } from 'contacts'

const inputs = () => {
    const { item } = parseQuery()

    return <>
        {
            item
            ?
            <Hidden
                property='item'
                value={item}
            />
            :
            <Text
                placeholder='reviewsItem'
                property='item'
                required
            />
        }
        <ContactsPersonField
            placeholder='reviewsPerson'
            property='person'
            required
        />
        <Title />
        <LongText
            placeholder='reviewsContent'
            property='content'
            required
        />
        <Boolean
            placeholder='reviewsHasUsedPersonally'
            property='hasUsedPersonally'
            required
        />
        <Boolean
            nullable
            placeholder='reviewsRecommended'
            property='recommended'
        />
    </>
}

export default <DialogForm inputs={inputs} />
