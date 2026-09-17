import {
    Boolean,
    DialogForm,
    LongText,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Text
        placeholder='reviewsItem'
        property='item'
        required
    />
    <Text
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
        placeholder='reviewsRecommended'
        property='recommended'
    />
</>

export default <DialogForm inputs={inputs} />
