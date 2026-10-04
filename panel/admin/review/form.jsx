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
                placeholder='item'
                property='item'
                required
            />
        }
        <ContactsPersonField
            placeholder='person'
            property='person'
            required
        />
        <Title />
        <LongText
            placeholder='content'
            property='content'
            required
        />
        <Boolean
            placeholder='hasUsedPersonally'
            property='hasUsedPersonally'
            required
        />
        <Boolean
            nullable
            placeholder='recommended'
            property='recommended'
        />
    </>
}

export default <DialogForm inputs={inputs} />
