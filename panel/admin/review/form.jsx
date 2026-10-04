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
                item
                value={item}
            />
            :
            <Text
                item
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
            content
            required
        />
        <Boolean
            hasUsedPersonally
            required
        />
        <Boolean
            nullable
            recommended
        />
    </>
}

export default <DialogForm inputs={inputs} />
